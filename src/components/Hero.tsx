import React from 'react';
import { ArrowRight, Wifi, Smartphone } from 'lucide-react';

interface HeroProps {
  onContactClick: (service?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="bg-wsb-cream">
      <div className="mx-auto max-w-shell px-6 lg:px-14 pt-14 lg:pt-24 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="wsb-eyebrow">Fibra · Móvil 5G · Seguridad</span>
            <h1 className="font-display font-bold text-wsb-ink mt-5 text-4xl sm:text-5xl lg:text-6xl leading-[0.98] tracking-tight">
              Conecta tu <span className="text-gradient-teal-orange">futuro</span><br />
              con <span className="wsb-marker">WasabiTel</span>
            </h1>
            <p className="mt-6 text-lg text-wsb-ink-2 max-w-xl leading-relaxed">
              Fibra óptica de última generación, planes móviles 5G flexibles y servicios de seguridad integrales. Tu conexión perfecta, con atención 24/7.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button onClick={() => onContactClick()} className="wsb-btn wsb-btn-primary !text-white">
                Explorar tarifas <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => document.getElementById('fibra')?.scrollIntoView({ behavior: 'smooth' })} className="wsb-btn wsb-btn-secondary">
                Ver planes
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="wsb-card shadow-stamp">
              <span className="wsb-eyebrow">wasabitel.com</span>
              <div className="mt-5 rounded-lg border border-wsb-line bg-wsb-cream-2 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Wifi className="w-5 h-5 text-brand" />
                  <div>
                    <div className="font-display font-bold text-wsb-ink">Fibra 1000M</div>
                    <div className="text-sm text-wsb-mute">Velocidad simétrica</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="wsb-mono text-2xl font-bold text-gradient-teal-orange">32,95€</div>
                  <div className="text-sm text-wsb-mute">/mes</div>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-wsb-line bg-wsb-cream-2 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5" style={{ color: 'var(--wsb-orange)' }} />
                  <div>
                    <div className="font-display font-bold text-wsb-ink">Móvil 120GB</div>
                    <div className="text-sm text-wsb-mute">Sin compromiso</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="wsb-mono text-2xl font-bold text-gradient-teal-orange">10,95€</div>
                  <div className="text-sm text-wsb-mute">/mes</div>
                </div>
              </div>

              <button onClick={() => onContactClick()} className="wsb-btn wsb-btn-primary !text-white w-full justify-center mt-5">
                Contratar ahora <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
