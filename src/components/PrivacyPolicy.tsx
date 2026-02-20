import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Users, FileText, Phone, Mail, MapPin } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-orange-500 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Política de Privacidad</h1>
              <p className="text-gray-600 mt-2">WasabiTel - Última actualización: Febrero 2026</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Responsable del tratamiento */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-6 h-6 text-teal-600" />
              <h2 className="text-2xl font-bold text-gray-900">1. Responsable del Tratamiento</h2>
            </div>
            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-xl">
              <div className="space-y-3 text-gray-700">
                <p><strong>Denominación:</strong> WasabiTel SL</p>
                <p><strong>CIF:</strong> B23933989</p>
                <p><strong>Domicilio:</strong> Calle Andarella, Num 2, Bloque 3, Planta 9, Puerta 6, 46950 Xirivella (Valencia)</p>
                <p><strong>Teléfono:</strong> 634 09 31 97</p>
                <p><strong>Email:</strong> originbycarlos@gmail.com</p>
              </div>
            </div>
          </section>

          {/* Datos que recopilamos */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold text-gray-900">2. Datos Personales que Recopilamos</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Datos de Identificación</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Nombre completo y apellidos
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    DNI/NIE/Pasaporte
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Fecha de nacimiento
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Nacionalidad
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Datos de Contacto</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Dirección postal completa
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Teléfono móvil y fijo
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Dirección de correo electrónico
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Datos de Servicios</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Información de tráfico y consumo
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Datos de facturación y pagos
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Registros de atención al cliente
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Datos bancarios para domiciliación
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Finalidades del tratamiento */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">3. Finalidades del Tratamiento</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-blue-900 mb-3">Prestación de Servicios</h3>
                <ul className="space-y-2 text-blue-800 text-sm">
                  <li>• Gestión de contratos y servicios</li>
                  <li>• Facturación y cobro</li>
                  <li>• Soporte técnico</li>
                  <li>• Mantenimiento de servicios</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-green-900 mb-3">Comunicaciones</h3>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• Ofertas comerciales</li>
                  <li>• Promociones especiales</li>
                  <li>• Información de servicios</li>
                  <li>• Encuestas de satisfacción</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-purple-900 mb-3">Cumplimiento Legal</h3>
                <ul className="space-y-2 text-purple-800 text-sm">
                  <li>• Obligaciones fiscales</li>
                  <li>• Normativa de telecomunicaciones</li>
                  <li>• Prevención de fraude</li>
                  <li>• Seguridad nacional</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-orange-900 mb-3">Mejora de Servicios</h3>
                <ul className="space-y-2 text-orange-800 text-sm">
                  <li>• Análisis de uso</li>
                  <li>• Optimización de red</li>
                  <li>• Desarrollo de productos</li>
                  <li>• Estudios de mercado</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Base legal */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">4. Base Legal del Tratamiento</h2>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-900">Ejecución de Contrato</h4>
                    <p className="text-purple-800 text-sm">Para la prestación de servicios de telecomunicaciones contratados.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-900">Consentimiento</h4>
                    <p className="text-purple-800 text-sm">Para comunicaciones comerciales y marketing directo.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-900">Obligación Legal</h4>
                    <p className="text-purple-800 text-sm">Para cumplir con normativas fiscales y de telecomunicaciones.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-900">Interés Legítimo</h4>
                    <p className="text-purple-800 text-sm">Para mejora de servicios y prevención de fraude.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Derechos del usuario */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">5. Tus Derechos</h2>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <p className="text-green-800 mb-4 font-medium">
                Tienes derecho a ejercer los siguientes derechos sobre tus datos personales:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    <div>
                      <span className="text-green-800 font-medium">Acceso</span>
                      <p className="text-green-700 text-sm">Conocer qué datos tenemos sobre ti</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    <div>
                      <span className="text-green-800 font-medium">Rectificación</span>
                      <p className="text-green-700 text-sm">Corregir datos inexactos</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    <div>
                      <span className="text-green-800 font-medium">Supresión</span>
                      <p className="text-green-700 text-sm">Eliminar tus datos</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    <div>
                      <span className="text-green-800 font-medium">Limitación</span>
                      <p className="text-green-700 text-sm">Restringir el tratamiento</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    <div>
                      <span className="text-green-800 font-medium">Portabilidad</span>
                      <p className="text-green-700 text-sm">Transferir tus datos</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    <div>
                      <span className="text-green-800 font-medium">Oposición</span>
                      <p className="text-green-700 text-sm">Oponerte al tratamiento</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conservación de datos */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-6 h-6 text-gray-600" />
              <h2 className="text-2xl font-bold text-gray-900">6. Conservación de Datos</h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-700"><strong>Durante la relación contractual:</strong> Mientras mantengas servicios activos con nosotros.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-700"><strong>Tras la baja:</strong> 6 años para cumplir obligaciones fiscales y legales.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-700"><strong>Marketing:</strong> Hasta que retires tu consentimiento o te opongas.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contacto */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Phone className="w-6 h-6 text-teal-600" />
              <h2 className="text-2xl font-bold text-gray-900">7. Contacto y Ejercicio de Derechos</h2>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-orange-50 border border-teal-200 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                Para ejercer tus derechos o resolver cualquier duda sobre el tratamiento de tus datos:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Teléfono</div>
                    <div className="text-gray-600">634 09 31 97</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Email</div>
                    <div className="text-gray-600">originbycarlos@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Dirección</div>
                    <div className="text-gray-600 text-sm">Calle Andarella, Num 2<br />46950 Xirivella (Valencia)</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500 text-center">
              Esta política de privacidad puede ser actualizada periódicamente. 
              Te notificaremos cualquier cambio significativo a través de nuestros canales habituales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;