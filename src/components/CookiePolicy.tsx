import React from 'react';
import { ArrowLeft, Cookie, Settings, Eye, BarChart3, Shield, Globe, Smartphone } from 'lucide-react';

interface CookiePolicyProps {
  onBack: () => void;
}

const CookiePolicy: React.FC<CookiePolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-teal-600 hover:text-teal-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver
          </button>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
              <Cookie className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Política de Cookies</h1>
              <p className="text-gray-600 mt-2">WasabiTel - Última actualización: Febrero 2026</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Qué son las cookies */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Cookie className="w-6 h-6 text-amber-600" />
              <h2 className="text-2xl font-bold text-gray-900">1. ¿Qué son las Cookies?</h2>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <p className="text-amber-800 leading-relaxed mb-4">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. 
                Nos permiten recordar tus preferencias y mejorar tu experiencia de navegación, así como analizar el uso 
                de nuestro sitio web para optimizar nuestros servicios.
              </p>
              <div className="bg-amber-100 p-4 rounded-lg">
                <h4 className="font-bold text-amber-900 mb-2">¿Por qué utilizamos cookies?</h4>
                <ul className="space-y-1 text-amber-800 text-sm">
                  <li>• Mejorar la funcionalidad del sitio web</li>
                  <li>• Personalizar tu experiencia de navegación</li>
                  <li>• Analizar el tráfico y uso del sitio</li>
                  <li>• Mostrar contenido relevante</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tipos de cookies */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Settings className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">2. Tipos de Cookies que Utilizamos</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h3 className="font-bold text-lg text-green-900">Cookies Técnicas (Necesarias)</h3>
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs font-medium">OBLIGATORIAS</span>
                </div>
                <p className="text-green-800 mb-3">
                  Son imprescindibles para el funcionamiento del sitio web y no se pueden desactivar.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Gestión de sesiones de usuario
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Recordar preferencias de idioma
                    </li>
                  </ul>
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Seguridad y autenticación
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Funcionamiento de formularios
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                  <h3 className="font-bold text-lg text-blue-900">Cookies Analíticas</h3>
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">OPCIONAL</span>
                </div>
                <p className="text-blue-800 mb-3">
                  Nos ayudan a entender cómo interactúas con nuestro sitio web para mejorarlo.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Google Analytics (datos anónimos)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Estadísticas de uso y navegación
                    </li>
                  </ul>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Análisis de rendimiento del sitio
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Mapas de calor y grabaciones
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Eye className="w-6 h-6 text-purple-600" />
                  <h3 className="font-bold text-lg text-purple-900">Cookies de Personalización</h3>
                  <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">OPCIONAL</span>
                </div>
                <p className="text-purple-800 mb-3">
                  Permiten recordar tus preferencias para ofrecerte una experiencia personalizada.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-purple-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Preferencias de visualización
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Configuración de formularios
                    </li>
                  </ul>
                  <ul className="space-y-2 text-purple-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Historial de servicios consultados
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Idioma y región preferidos
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Globe className="w-6 h-6 text-red-600" />
                  <h3 className="font-bold text-lg text-red-900">Cookies Publicitarias</h3>
                  <span className="bg-red-200 text-red-800 px-2 py-1 rounded-full text-xs font-medium">OPCIONAL</span>
                </div>
                <p className="text-red-800 mb-3">
                  Se utilizan para mostrar publicidad relevante y medir la efectividad de las campañas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-red-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Google Ads y remarketing
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Facebook Pixel
                    </li>
                  </ul>
                  <ul className="space-y-2 text-red-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Seguimiento de conversiones
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Publicidad personalizada
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Cookies de terceros */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <BarChart3 className="w-6 h-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-900">3. Cookies de Terceros</h2>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <p className="text-orange-800 mb-4">
                Utilizamos servicios de terceros que pueden instalar sus propias cookies:
              </p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <BarChart3 className="w-5 h-5 text-orange-600" />
                    <h4 className="font-bold text-orange-900">Google Analytics</h4>
                  </div>
                  <p className="text-orange-800 text-sm mb-2">
                    Para análisis estadístico del tráfico web. Los datos se procesan de forma anónima.
                  </p>
                  <p className="text-orange-700 text-xs">
                    Duración: Hasta 2 años | Más info: <a href="https://policies.google.com/privacy" className="underline">Google Privacy Policy</a>
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <Smartphone className="w-5 h-5 text-orange-600" />
                    <h4 className="font-bold text-orange-900">WhatsApp Business</h4>
                  </div>
                  <p className="text-orange-800 text-sm mb-2">
                    Para la funcionalidad de chat y contacto directo con nuestro equipo.
                  </p>
                  <p className="text-orange-700 text-xs">
                    Duración: Sesión | Más info: <a href="https://www.whatsapp.com/legal/privacy-policy" className="underline">WhatsApp Privacy</a>
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <Globe className="w-5 h-5 text-orange-600" />
                    <h4 className="font-bold text-orange-900">Google Maps</h4>
                  </div>
                  <p className="text-orange-800 text-sm mb-2">
                    Para mostrar mapas de cobertura y localización de oficinas.
                  </p>
                  <p className="text-orange-700 text-xs">
                    Duración: Persistente | Más info: <a href="https://policies.google.com/privacy" className="underline">Google Privacy Policy</a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Gestión de cookies */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Settings className="w-6 h-6 text-teal-600" />
              <h2 className="text-2xl font-bold text-gray-900">4. Cómo Gestionar las Cookies</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-teal-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-teal-900 mb-3">Configuración del Navegador</h3>
                <p className="text-teal-800 mb-3">
                  Puedes configurar tu navegador para aceptar, rechazar o eliminar cookies:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-medium text-teal-900">Chrome:</p>
                      <p className="text-sm text-teal-800">Configuración → Privacidad y seguridad → Cookies</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-medium text-teal-900">Firefox:</p>
                      <p className="text-sm text-teal-800">Opciones → Privacidad y seguridad</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-medium text-teal-900">Safari:</p>
                      <p className="text-sm text-teal-800">Preferencias → Privacidad</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-medium text-teal-900">Edge:</p>
                      <p className="text-sm text-teal-800">Configuración → Privacidad, búsqueda y servicios</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-yellow-900 mb-3">⚠️ Importante</h3>
                <p className="text-yellow-800 mb-3">
                  Si desactivas las cookies técnicas, es posible que algunas funcionalidades del sitio web 
                  no funcionen correctamente, como:
                </p>
                <ul className="space-y-1 text-yellow-800">
                  <li>• Los formularios de contacto</li>
                  <li>• La personalización de contenidos</li>
                  <li>• El carrito de compras</li>
                  <li>• Las preferencias guardadas</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Consentimiento */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">5. Consentimiento y Control</h2>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-green-900 mb-2">Consentimiento Inicial</h4>
                  <p className="text-green-800">
                    Al visitar nuestro sitio web por primera vez, te mostraremos un banner informativo 
                    donde podrás aceptar o rechazar las cookies no esenciales.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-green-900 mb-2">Gestión Posterior</h4>
                  <p className="text-green-800">
                    Puedes cambiar tus preferencias en cualquier momento a través del panel de configuración 
                    de cookies o modificando la configuración de tu navegador.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-green-900 mb-2">Retirada del Consentimiento</h4>
                  <p className="text-green-800">
                    Puedes retirar tu consentimiento en cualquier momento. Esto no afectará a la legalidad 
                    del tratamiento basado en el consentimiento previo a su retirada.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contacto */}
          <section>
            <div className="bg-gradient-to-r from-teal-50 to-orange-50 border border-teal-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Contacto sobre Cookies</h3>
              <p className="text-gray-700 mb-4">
                Si tienes dudas sobre nuestra política de cookies, puedes contactarnos:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Cookie className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Email</div>
                    <div className="text-gray-600">originbycarlos@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Teléfono</div>
                    <div className="text-gray-600">634 09 31 97</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500 text-center">
              Esta política de cookies puede ser actualizada periódicamente. 
              Te recomendamos revisarla ocasionalmente para estar informado de cualquier cambio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;