import React from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  onContactClick: (service?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  const links = [
    { id: 'fibra', label: 'Fibra Óptica' },
    { id: 'movil', label: 'Móvil 5G' },
    { id: 'seguridad', label: 'Seguridad' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 border-b border-wsb-line transition-colors ${isScrolled ? 'bg-wsb-cream/95 backdrop-blur' : 'bg-wsb-cream'}`}>
      <div className="mx-auto max-w-shell px-6 lg:px-14 h-16 flex items-center justify-between">
        <div className="font-display font-bold text-xl tracking-tight text-wsb-ink">
          Wasabi<span className="text-gradient-teal-orange">Tel</span>
        </div>

        <nav className="hidden lg:flex items-center gap-7 font-display text-sm font-medium">
          {links.map((l) => (
            <button key={l.id} onClick={() => scrollToSection(l.id)} className="text-wsb-ink-2 hover:text-brand transition-colors">
              {l.label}
            </button>
          ))}
          <button onClick={() => onContactClick()} className="wsb-btn wsb-btn-primary !text-white">
            <Phone className="w-4 h-4" /> Contratar ahora
          </button>
        </nav>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-wsb-ink" aria-label="Menú">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-wsb-line bg-wsb-cream">
          <div className="px-6 py-4 space-y-3 font-display font-medium">
            {links.map((l) => (
              <button key={l.id} onClick={() => scrollToSection(l.id)} className="block w-full text-left text-wsb-ink-2 hover:text-brand py-1">
                {l.label}
              </button>
            ))}
            <button onClick={() => { onContactClick(); setIsMenuOpen(false); }} className="wsb-btn wsb-btn-primary !text-white w-full justify-center mt-2">
              Contratar ahora
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
