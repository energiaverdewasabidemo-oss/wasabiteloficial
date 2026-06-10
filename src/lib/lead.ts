// Cliente ligero para persistir leads en /api/lead (Supabase + email + Meta CAPI).
// No bloquea la UX: si falla, el flujo de WhatsApp continúa igual.
export interface LeadPayload {
  nombre?: string;
  apellidos?: string;
  telefono: string;
  email?: string;
  mensaje?: string;
  source: string;
  extra?: Record<string, unknown>;
}

export async function submitLead(payload: LeadPayload): Promise<string> {
  const eventId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
  try {
    await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, eventId }),
      keepalive: true,
    });
  } catch (err) {
    console.warn('No se pudo registrar el lead:', err);
  }
  return eventId;
}
