import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Clock, Shield, Award, Zap } from 'lucide-react';

interface FooterProps {
  onCallRequestClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onCallRequestClick }) => {
  const services = [
    { name: 'Fibra Óptica', href: '#' },
    { name: 'Planes Móviles', href: '#movil' },
    { name: 'Sistemas de Seguridad', href: '#seguridad' },
    { name: 'Servicios Premium', href: '#servicios' },
    { name: 'Soporte 24/7', href: '#contacto' },
    { name: 'Área de Cliente', href: '#contacto' }
  ];

  const company = [
    { name: 'Sobre Nosotros', href: '#empresa' },
    { name: 'Por qué WasabiTel', href: '#empresa' },
    { name: 'Cobertura', href: '#empresa' },
    { name: 'Instalación', href: '#servicios' },
    { name: 'Promociones', href: '#fibra' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const support = [
    { name: 'Centro de Ayuda', href: '#contacto' },
    { name: 'Configuración Router', href: '#servicios' },
    { name: 'Problemas Técnicos', href: '#contacto' },
    { name: 'Facturación', href: '#contacto' },
    { name: 'Cambio de Titular', href: '#contacto' },
    { name: 'Portabilidad', href: '#contacto' }
  ];

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    // Handle policy pages
    if (href === '/politica-privacidad') {
      window.history.pushState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
      return;
    }
    if (href === '/terminos-condiciones') {
      window.history.pushState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
      return;
    }
    if (href === '/cookies') {
      window.history.pushState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
      return;
    }
    if (href === '/aviso-legal') {
      window.history.pushState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
      return;
    }
    
    // Handle anchor links
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };
  const features = [
    { icon: <Shield className="w-5 h-5" />, text: 'Conexión Segura SSL' },
    { icon: <Clock className="w-5 h-5" />, text: 'Soporte 24/7' },
    { icon: <Award className="w-5 h-5" />, text: 'Certificación ISO' },
    { icon: <Zap className="w-5 h-5" />, text: 'Instalación Express' }
  ];

  return (
    <footer id="contacto" className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden particles-bg">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Section */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 slide-up">
            <div className="bounce-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative group">
                  {/* Elegant glow for footer */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/20 to-orange-500/20 rounded-xl blur-lg opacity-80 transition-all duration-300"></div>

                  {/* Elegant rectangular container for footer */}
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-teal-400/30 transition-all duration-300 shadow-xl group-hover:border-teal-400/50">
                    <img
                      src="https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/10/Diseno-sin-titulo-26.png"
                      alt="WasabiTel Logo"
                      className="h-16 w-auto object-contain transition-all duration-500 brightness-110 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-xl leading-relaxed mb-8 hover:text-gray-200 transition-colors duration-300">
                Más de 15 años conectando España con la mejor tecnología en telecomunicaciones. 
                Fibra óptica, móvil y servicios de seguridad de última generación para hogares y empresas.
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/5">
                    <div className="text-teal-400 animate-pulse">
                      {feature.icon}
                    </div>
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                  <a key={index} href="#" className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-br hover:from-teal-500 hover:to-orange-500 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 neon-teal hover-lift">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 glass-effect hover-lift card-premium">
              <h3 className="text-3xl font-bold mb-6 text-center text-gradient-teal-orange">Contacto Directo</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-2xl hover:bg-gray-700/70 transition-colors duration-300 hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center neon-teal">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-xl">621 50 83 00</div>
                    <div className="text-gray-400 text-sm">Atención al cliente 24/7</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-2xl hover:bg-gray-700/70 transition-colors duration-300 hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center neon-orange">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-xl">info@wasabitel.com</div>
                    <div className="text-gray-400 text-sm">Respuesta en menos de 2h</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-2xl hover:bg-gray-700/70 transition-colors duration-300 hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-xl">Madrid, España</div>
                    <div className="text-gray-400 text-sm">Oficinas centrales</div>
                  </div>
                </div>
              </div>
              
              <button onClick={onCallRequestClick} className="w-full mt-6 bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 btn-premium pulse-glow shimmer-effect">
                Solicitar Llamada Gratuita
              </button>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="slide-up">
              <h4 className="text-2xl font-bold mb-6 text-gradient-teal-orange">Servicios</h4>
              <ul className="space-y-3">
                {services.map((item, index) => (
                  <li key={index}>
                    <button onClick={(e) => handleLinkClick(item.href, e)} className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group text-left hover:bg-white/5 p-2 rounded-lg w-full">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></span>
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="slide-up" style={{animationDelay: '0.2s'}}>
              <h4 className="text-2xl font-bold mb-6 text-gradient-teal-orange">Empresa</h4>
              <ul className="space-y-3">
                {company.map((item, index) => (
                  <li key={index}>
                    <button onClick={(e) => handleLinkClick(item.href, e)} className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group text-left hover:bg-white/5 p-2 rounded-lg w-full">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></span>
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="slide-up" style={{animationDelay: '0.4s'}}>
              <h4 className="text-2xl font-bold mb-6 text-gradient-teal-orange">Soporte</h4>
              <ul className="space-y-3">
                {support.map((item, index) => (
                  <li key={index}>
                    <button onClick={(e) => handleLinkClick(item.href, e)} className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group text-left hover:bg-white/5 p-2 rounded-lg w-full">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></span>
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 slide-up">
              <p className="text-gray-400 text-sm">
                © 2025 WasabiTel. Todos los derechos reservados.
              </p>
              <div className="flex items-center space-x-2 text-xs text-gray-500 hover:text-gray-400 transition-colors duration-300">
                <Shield className="w-4 h-4" />
                <span>Sitio web seguro y certificado</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 slide-up" style={{animationDelay: '0.2s'}}>
              <button onClick={(e) => handleLinkClick('/politica-privacidad', e)} className="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:scale-105 transform">
                Política de Privacidad
              </button>
              <button onClick={(e) => handleLinkClick('/terminos-condiciones', e)} className="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:scale-105 transform">
                Términos y Condiciones
              </button>
              <button onClick={(e) => handleLinkClick('/cookies', e)} className="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:scale-105 transform">
                Cookies
              </button>
              <button onClick={(e) => handleLinkClick('/aviso-legal', e)} className="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:scale-105 transform">
                Aviso Legal
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;