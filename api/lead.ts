import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createHash } from 'node:crypto';
import nodemailer from 'nodemailer';

/**
 * Captura de leads del holding Wasabi (réplica ligera del pipeline de
 * wasabienergia.es para apps Vite). Persiste en Supabase, avisa al equipo
 * por email y dispara el evento Lead a Meta CAPI. Nunca rompe la respuesta.
 *
 * Env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, SMTP_HOST/PORT/USER/PASS,
 * CHECKOUT_FROM_EMAIL, CHECKOUT_INTERNAL_TO, RESEND_API_KEY (opc),
 * META_CAPI_TOKEN, META_PIXEL_ID (o NEXT_PUBLIC_META_PIXEL_ID), SITE_URL.
 */

interface LeadBody {
  nombre?: string;
  apellidos?: string;
  telefono?: string;
  email?: string;
  mensaje?: string;
  source?: string;
  eventId?: string;
  extra?: Record<string, unknown>;
}

const sha256 = (s: string) => createHash('sha256').update(s.trim().toLowerCase()).digest('hex');

async function saveLead(lead: LeadBody): Promise<string | null> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  const row = {
    nombre: lead.nombre || 'Lead web',
    apellidos: lead.apellidos || '',
    email: lead.email || null,
    telefono: lead.telefono || '',
    source: lead.source || 'web',
    status: 'nuevo',
  };
  try {
    const res = await fetch(`${url}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        apikey: key,
        authorization: `Bearer ${key}`,
        'content-type': 'application/json',
        prefer: 'return=representation',
      },
      body: JSON.stringify(row),
    });
    if (!res.ok) {
      console.error('[lead] insert failed:', res.status, await res.text());
      return null;
    }
    const rows = (await res.json()) as Array<{ id?: string }>;
    return rows?.[0]?.id ?? null;
  } catch (err) {
    console.error('[lead] request failed:', err);
    return null;
  }
}

async function notifyLead(lead: LeadBody) {
  const to = process.env.CHECKOUT_INTERNAL_TO;
  const from = process.env.CHECKOUT_FROM_EMAIL ?? process.env.SMTP_USER;
  if (!to || !from) return;
  const subject = `🔔 Nuevo lead (${lead.source ?? 'web'}): ${lead.nombre ?? ''} · ${lead.telefono ?? ''}`;
  const text = [
    `Nuevo LEAD desde ${lead.source ?? 'la web'} — llamar para cerrar.`,
    ``,
    `Nombre:   ${lead.nombre ?? '—'} ${lead.apellidos ?? ''}`,
    `Teléfono: ${lead.telefono ?? '—'}`,
    `Email:    ${lead.email ?? '—'}`,
    lead.mensaje ? `\nMensaje:\n${lead.mensaje}` : '',
    lead.extra ? `\nExtra: ${JSON.stringify(lead.extra)}` : '',
  ].join('\n');

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (host && user && pass) {
    try {
      const port = Number(process.env.SMTP_PORT ?? 465);
      const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
      await transporter.sendMail({ from, to, subject, text });
      return;
    } catch (err) {
      console.error('[lead notify] SMTP failed:', err);
    }
  }
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'content-type': 'application/json', authorization: `Bearer ${apiKey}` },
        body: JSON.stringify({ from, to: [to], subject, text }),
      });
      if (res.ok) return;
      console.error('[lead notify] Resend failed:', res.status, await res.text());
    } catch (err) {
      console.error('[lead notify] Resend error:', err);
    }
  }
  console.warn('[lead notify] no email channel — lead logged:', text);
}

async function sendCapiLead(lead: LeadBody, ip?: string, userAgent?: string) {
  const token = process.env.META_CAPI_TOKEN;
  const pixelId = process.env.META_PIXEL_ID ?? process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (!token || !pixelId) return;
  const phoneDigits = (lead.telefono ?? '').replace(/\D/g, '');
  const phoneFull = phoneDigits ? (phoneDigits.startsWith('34') ? phoneDigits : `34${phoneDigits}`) : '';
  const userData: Record<string, unknown> = {};
  if (lead.email) userData.em = [sha256(lead.email)];
  if (phoneFull) userData.ph = [sha256(phoneFull)];
  if (lead.nombre) userData.fn = [sha256(lead.nombre)];
  if (lead.apellidos) userData.ln = [sha256(lead.apellidos)];
  if (ip) userData.client_ip_address = ip;
  if (userAgent) userData.client_user_agent = userAgent;

  const payload = {
    data: [
      {
        event_name: 'Lead',
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_source_url: process.env.SITE_URL ?? '',
        ...(lead.eventId ? { event_id: lead.eventId } : {}),
        user_data: userData,
        custom_data: { currency: 'EUR' },
      },
    ],
    ...(process.env.META_CAPI_TEST_CODE ? { test_event_code: process.env.META_CAPI_TEST_CODE } : {}),
  };
  try {
    const res = await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${token}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) console.error('[lead capi] non-2xx:', res.status, await res.text());
  } catch (err) {
    console.error('[lead capi] failed:', err);
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'method_not_allowed' });
    return;
  }
  const lead: LeadBody = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body ?? {});
  if (!lead.telefono && !lead.email) {
    res.status(400).json({ ok: false, error: 'missing_contact' });
    return;
  }
  const ip = (req.headers['x-forwarded-for'] as string | undefined)?.split(',')[0]?.trim();
  const userAgent = req.headers['user-agent'];

  const [leadId] = await Promise.all([
    saveLead(lead),
    notifyLead(lead),
    sendCapiLead(lead, ip, userAgent),
  ]);

  res.status(200).json({ ok: true, leadId });
}
