import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

interface FooterProps {
  onCallRequestClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onCallRequestClick }) => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer id="contacto" className="bg-wsb-cream-2 border-t border-wsb-line">
      <div className="mx-auto max-w-shell px-6 lg:px-14 py-14 lg:py-16">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          <div>
            <span className="font-display font-bold text-xl tracking-tight text-wsb-ink">
              Wasabi<span className="text-gradient-teal-orange">Tel</span>
            </span>
            <p className="mt-4 text-wsb-ink-2 leading-relaxed max-w-sm">
              Telecomunicaciones de nueva generación: fibra hasta 1000M, móvil 5G y seguridad para tu hogar. Atención 24/7.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href="tel:+34621508300" className="flex items-center gap-2.5 no-underline text-wsb-ink hover:text-brand">
                <Phone className="w-4 h-4 text-brand" /> 621 50 83 00
              </a>
              <span className="flex items-center gap-2.5 text-wsb-ink-2">
                <Mail className="w-4 h-4 text-brand" /> info@wasabitel.com
              </span>
              <span className="flex items-center gap-2.5 text-wsb-ink-2">
                <MapPin className="w-4 h-4 text-brand" /> España
              </span>
            </div>
          </div>

          <div>
            <h4 className="wsb-eyebrow">Servicios</h4>
            <ul className="mt-5 space-y-3 text-wsb-ink-2 font-display font-medium">
              <li><button onClick={() => scrollTo('fibra')} className="hover:text-brand">Fibra óptica</button></li>
              <li><button onClick={() => scrollTo('movil')} className="hover:text-brand">Planes móviles 5G</button></li>
              <li><button onClick={() => scrollTo('seguridad')} className="hover:text-brand">Sistemas de seguridad</button></li>
            </ul>
          </div>

          <div>
            <h4 className="wsb-eyebrow">¿Hablamos?</h4>
            <p className="mt-5 text-wsb-ink-2">Te llamamos gratis y sin compromiso para encontrar tu tarifa.</p>
            <button onClick={onCallRequestClick} className="wsb-btn wsb-btn-primary !text-white mt-5">
              Solicitar llamada <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="border-t border-wsb-line mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-wsb-mute">
          <p>© 2025 WasabiTel. Todos los derechos reservados.</p>
          <div className="flex items-center gap-5 font-display font-medium">
            <a href="/politica-privacidad" className="no-underline text-wsb-ink-2 hover:text-brand">Privacidad</a>
            <a href="/terminos-condiciones" className="no-underline text-wsb-ink-2 hover:text-brand">Términos</a>
            <a href="/cookies" className="no-underline text-wsb-ink-2 hover:text-brand">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
