import React from 'react';
import { Shield, Camera, Lock, Smartphone, Zap, Clock, Users, Award } from 'lucide-react';

interface SecurityServicesProps {
  onContactClick: (service?: string) => void;
  onAlarmClick: () => void;
}

const SecurityServices: React.FC<SecurityServicesProps> = ({ onContactClick, onAlarmClick }) => {
  const mainServices = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Alarma Conectada',
      subtitle: 'Protección 24/7',
      serviceId: 'alarma-conectada',
      description: 'Sistema de alarma inteligente con conexión directa a nuestra Central Receptora de Alarmas.',
      features: [
        'Sensores inalámbricos de última generación',
        'Conexión dual: WiFi + 4G/5G',
        'Batería de respaldo 48h',
        'App móvil con control total'
      ],
      price: 'Desde 39€',
      period: '/mes',
      gradient: 'from-red-600 to-red-800',
      popular: true
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: 'Videovigilancia',
      subtitle: 'Grabación HD',
      serviceId: 'videovigilancia',
      description: 'Cámaras de seguridad con grabación en la nube y detección inteligente de movimiento.',
      features: [
        'Grabación 4K Ultra HD',
        'Visión nocturna infrarroja',
        'Detección de personas/vehículos',
        'Almacenamiento en la nube'
      ],
      price: 'Desde 29€',
      period: '/mes',
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: 'Control de Acceso',
      subtitle: 'Cerraduras Smart',
      serviceId: 'control-acceso',
      description: 'Cerraduras inteligentes con códigos temporales y registro completo de accesos.',
      features: [
        'Apertura por código/huella/app',
        'Códigos temporales para invitados',
        'Historial completo de accesos',
        'Integración total con alarma'
      ],
      price: 'Desde 19€',
      period: '/mes',
      gradient: 'from-blue-600 to-blue-800'
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '2M+', label: 'Hogares Protegidos' },
    { icon: <Clock className="w-8 h-8" />, number: '24/7', label: 'Monitoreo Continuo' },
    { icon: <Zap className="w-8 h-8" />, number: '<30s', label: 'Tiempo de Respuesta' },
    { icon: <Award className="w-8 h-8" />, number: '25+', label: 'Años de Experiencia' }
  ];

  return (
    <section id="seguridad" className="py-24 bg-gradient-to-br from-gray-50 via-red-50/30 to-orange-50/30 relative overflow-hidden particles-bg">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20 slide-up">
          <div className="inline-flex items-center bg-red-100 text-red-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 bounce-in pulse-glow">
            <Shield className="w-4 h-4 mr-2" />
            En colaboración con Securitas Direct
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-6">
            Seguridad <span className="text-gradient-teal-orange">Total</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Protege lo que más te importa con la tecnología de seguridad más avanzada del mercado. 
            Monitoreo profesional 24/7 y respuesta inmediata ante cualquier incidencia.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300 float-animation neon-orange">
                <div className="text-white">{stat.icon}</div>
              </div>
              <div className="text-4xl font-bold text-gradient-teal-orange mb-1">{stat.number}</div>
              <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <div key={index} className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500 card-premium glass-effect hover-lift bounce-in ${service.popular ? 'ring-2 ring-red-500 scale-105' : ''}`} style={{animationDelay: `${index * 0.2}s`}}>
              {service.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-500 to-red-700 text-white text-center py-3 text-sm font-bold gradient-shift">
                  ⭐ MÁS POPULAR
                </div>
              )}
              
              <div className={`bg-gradient-to-br ${service.gradient} text-white p-8 ${service.popular ? 'pt-16' : ''} gradient-shift`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm float-animation neon-teal">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold">{service.price}</div>
                    <div className="text-sm opacity-90">{service.period}</div>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                <p className="text-xl opacity-90 mb-4">{service.subtitle}</p>
                <p className="opacity-80 leading-relaxed">{service.description}</p>
              </div>
              
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></div>
                      <span className="text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button onClick={() => onContactClick(service.serviceId)} className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg text-white py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 btn-premium shimmer-effect`}>
                  Contratar Ahora
                </button>
                {service.serviceId === 'alarma-conectada' && (
                  <button onClick={onAlarmClick} className="w-full mt-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-3 rounded-2xl font-bold transition-all duration-300 hover:scale-105 glass-effect">
                    Solicitar Presupuesto Detallado
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-3xl p-12 text-white text-center relative overflow-hidden gradient-shift hover-lift">
          <div className="absolute inset-0 bg-black/10 particles-bg"></div>
          <div className="relative z-10">
            <h3 className="text-5xl font-bold mb-6 bounce-in">Paquete Seguridad Premium</h3>
            <p className="text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Combina alarma + videovigilancia + control de acceso con instalación profesional gratuita 
              y 3 meses sin coste. Protección total para tu hogar o negocio.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm float-animation neon-teal">
                  <Shield className="w-10 h-10" />
                </div>
                <span className="font-bold text-xl">INSTALACIÓN GRATUITA</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm float-animation neon-orange" style={{animationDelay: '1s'}}>
                  <Smartphone className="w-10 h-10" />
                </div>
                <span className="font-bold text-xl">APP MÓVIL INCLUIDA</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm float-animation neon-teal" style={{animationDelay: '2s'}}>
                  <Clock className="w-10 h-10" />
                </div>
                <span className="font-bold text-xl">SOPORTE 24/7</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={onAlarmClick} className="bg-white text-red-700 hover:bg-gray-100 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl btn-premium neon-orange shimmer-effect">
                Solicitar Presupuesto Gratuito
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-700 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 glass-effect">
                Llamar Ahora: 621 50 83 00
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityServices;