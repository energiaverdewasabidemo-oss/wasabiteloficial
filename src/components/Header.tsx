import React from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  onContactClick: (service?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 sm:py-4">
          {/* Logo Section - Exactly like WasabiEnergía */}
          <div className="flex items-center">
            <div className="relative group cursor-pointer scale-105 transition-all duration-300">
              {/* Premium glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/30 to-orange-500/30 rounded-xl blur-xl opacity-100 transition-all duration-300 animate-pulse"></div>

              {/* Rotating shimmer */}
              <div className="absolute -inset-3 bg-gradient-to-r from-teal-400/20 via-orange-400/20 to-teal-400/20 rounded-xl blur-2xl opacity-70 animate-spin" style={{animationDuration: '6s'}}></div>

              {/* Premium rectangular container with perfect fit */}
              <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-xl px-2 py-1 sm:px-3 sm:py-1.5 border-2 border-teal-400/40 transition-all duration-300 shadow-2xl group-hover:border-teal-400/60 group-hover:shadow-teal-500/20 group-hover:scale-105 flex items-center justify-center">
                <img
                  src="https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/10/Diseno-sin-titulo-26.png"
                  alt="WasabiTel Logo"
                  className="h-10 sm:h-16 w-auto object-contain transition-all duration-300 brightness-110 contrast-110 relative z-10 block"
                />
              </div>
            </div>
          </div>
          
          {/* Navigation - Exactly like WasabiEnergía style */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('fibra')} 
              className="relative text-white/90 hover:text-white font-medium text-lg transition-all duration-300 group py-2"
            >
              <span className="relative z-10">Fibra Óptica</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-orange-400 group-hover:w-full transition-all duration-300"></div>
              <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('movil')} 
              className="relative text-white/90 hover:text-white font-medium text-lg transition-all duration-300 group py-2"
            >
              <span className="relative z-10">Móvil 5G</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-orange-400 group-hover:w-full transition-all duration-300"></div>
              <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('seguridad')} 
              className="relative text-white/90 hover:text-white font-medium text-lg transition-all duration-300 group py-2"
            >
              <span className="relative z-10">Seguridad</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-orange-400 group-hover:w-full transition-all duration-300"></div>
              <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="relative text-white/90 hover:text-white font-medium text-lg transition-all duration-300 group py-2"
            >
              <span className="relative z-10">Contacto</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-orange-400 group-hover:w-full transition-all duration-300"></div>
              <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </nav>
          
          {/* CTA Button - Exactly like WasabiEnergía */}
          <div className="hidden lg:block">
            <button 
              onClick={() => onContactClick()} 
              className="relative px-6 py-2.5 bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-400 hover:to-orange-400 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group overflow-hidden"
            >
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button text */}
              <span className="relative z-10 flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Contratar Ahora</span>
              </span>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-orange-400 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-3 text-white hover:text-teal-400 transition-colors duration-300"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'top-3'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-white/20 pt-6">
            <div className="grid grid-cols-1 gap-2">
              <button 
                onClick={() => scrollToSection('fibra')} 
                className="flex items-center justify-between p-4 text-white/90 hover:text-white hover:bg-white/10 font-medium text-left rounded-xl transition-all duration-300"
              >
                <span>Fibra Óptica</span>
              </button>
              <button 
                onClick={() => scrollToSection('movil')} 
                className="flex items-center justify-between p-4 text-white/90 hover:text-white hover:bg-white/10 font-medium text-left rounded-xl transition-all duration-300"
              >
                <span>Móvil 5G</span>
              </button>
              <button 
                onClick={() => scrollToSection('seguridad')} 
                className="flex items-center justify-between p-4 text-white/90 hover:text-white hover:bg-white/10 font-medium text-left rounded-xl transition-all duration-300"
              >
                <span>Seguridad</span>
              </button>
              <button 
                onClick={() => scrollToSection('contacto')} 
                className="flex items-center justify-between p-4 text-white/90 hover:text-white hover:bg-white/10 font-medium text-left rounded-xl transition-all duration-300"
              >
                <span>Contacto</span>
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/20">
              <button 
                onClick={() => onContactClick()} 
                className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-400 hover:to-orange-400 text-white font-bold rounded-full transition-all duration-300 shadow-lg"
              >
                Contratar Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating background elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-0 right-1/4 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
    </header>
  );
};

export default Header;