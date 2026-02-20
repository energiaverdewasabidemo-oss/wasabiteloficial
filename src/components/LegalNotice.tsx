import React from 'react';
import { ArrowLeft, Scale, Building, FileText, Mail, Phone, MapPin, Globe, Shield } from 'lucide-react';

interface LegalNoticeProps {
  onBack: () => void;
}

const LegalNotice: React.FC<LegalNoticeProps> = ({ onBack }) => {
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
            <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Aviso Legal</h1>
              <p className="text-gray-600 mt-2">WasabiTel - Última actualización: Febrero 2026</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Datos identificativos */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Building className="w-6 h-6 text-gray-600" />
              <h2 className="text-2xl font-bold text-gray-900">1. Datos Identificativos de la Empresa</h2>
            </div>
            <div className="bg-gray-50 border-l-4 border-gray-500 p-6 rounded-r-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Building className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <p className="text-gray-700"><strong>Denominación social:</strong></p>
                      <p className="text-gray-600">WasabiTel SL</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileText className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <p className="text-gray-700"><strong>CIF:</strong></p>
                      <p className="text-gray-600">B23933989</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <p className="text-gray-700"><strong>Domicilio social:</strong></p>
                      <p className="text-gray-600">Calle Andarella, Num 2<br/>Bloque 3, Planta 9, Puerta 6<br/>46950 Xirivella (Valencia)</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <p className="text-gray-700"><strong>Teléfono:</strong></p>
                      <p className="text-gray-600">634 09 31 97</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <p className="text-gray-700"><strong>Email:</strong></p>
                      <p className="text-gray-600">originbycarlos@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <p className="text-gray-700"><strong>Sitio web:</strong></p>
                      <p className="text-gray-600">wasabitel.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Objeto y actividad */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-6 h-6 text-teal-600" />
              <h2 className="text-2xl font-bold text-gray-900">2. Objeto Social y Actividad</h2>
            </div>
            <div className="bg-teal-50 p-6 rounded-xl">
              <p className="text-teal-800 leading-relaxed mb-4">
                WasabiTel ofrece servicios de asesoría integral en telefonía, energía y seguros,
                operando con marcas propias en el territorio nacional español.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-teal-900 mb-3">Servicios Principales</h4>
                  <ul className="space-y-2 text-teal-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Asesoría en telefonía móvil y fija
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Consultoría en servicios de energía
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Asesoría en seguros
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Servicios de fibra óptica
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-teal-900 mb-3">Servicios Adicionales</h4>
                  <ul className="space-y-2 text-teal-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Sistemas de alarma y seguridad
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Atención al cliente personalizada
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Comparativas de servicios
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Soluciones personalizadas
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Condiciones de uso */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Scale className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold text-gray-900">3. Condiciones de Uso del Sitio Web</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-orange-900 mb-3">✅ Uso Permitido</h3>
                <p className="text-orange-800 mb-3">
                  El acceso y uso de este sitio web implica la aceptación plena de estas condiciones. 
                  El usuario se compromete a utilizar el sitio web de forma lícita y conforme a la legislación vigente.
                </p>
                <div className="bg-orange-100 p-4 rounded-lg">
                  <h4 className="font-bold text-orange-900 mb-2">Actividades permitidas:</h4>
                  <ul className="space-y-1 text-orange-800 text-sm">
                    <li>• Consulta de información sobre servicios</li>
                    <li>• Solicitud de presupuestos y contratación</li>
                    <li>• Contacto con el servicio de atención al cliente</li>
                    <li>• Descarga de documentos autorizados</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-red-900 mb-3">❌ Uso Prohibido</h3>
                <p className="text-red-800 mb-3">
                  Queda estrictamente prohibido cualquier uso del sitio web que pueda dañar, inutilizar, 
                  sobrecargar o deteriorar los servidores o redes de WasabiTel.
                </p>
                <div className="bg-red-100 p-4 rounded-lg">
                  <h4 className="font-bold text-red-900 mb-2">Actividades prohibidas:</h4>
                  <ul className="space-y-1 text-red-800 text-sm">
                    <li>• Introducción de virus, malware o código malicioso</li>
                    <li>• Intentos de acceso no autorizado a sistemas</li>
                    <li>• Uso para actividades fraudulentas o ilegales</li>
                    <li>• Vulneración de derechos de propiedad intelectual</li>
                    <li>• Envío de spam o comunicaciones masivas no solicitadas</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Propiedad intelectual */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">4. Propiedad Intelectual e Industrial</h2>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="space-y-4">
                <p className="text-blue-800 mb-4">
                  Todos los contenidos de este sitio web, incluyendo pero no limitándose a textos, imágenes, 
                  logotipos, iconos, fotografías, diseños, código fuente y software, son propiedad exclusiva 
                  de WasabiTel o de terceros que han autorizado su uso.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">🔒 Derechos Reservados</h4>
                    <ul className="space-y-1 text-blue-800 text-sm">
                      <li>• Marca registrada "WasabiTel"</li>
                      <li>• Logotipos y elementos gráficos</li>
                      <li>• Contenidos web y multimedia</li>
                      <li>• Software y aplicaciones</li>
                      <li>• Bases de datos y compilaciones</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">⚖️ Uso Autorizado</h4>
                    <ul className="space-y-1 text-blue-800 text-sm">
                      <li>• Visualización personal y temporal</li>
                      <li>• Descarga para uso privado</li>
                      <li>• Impresión de documentos autorizados</li>
                      <li>• Cita con fines informativos</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-red-100 border border-red-300 p-4 rounded-lg">
                  <p className="text-red-800 font-medium">
                    ⚠️ Queda prohibida la reproducción, distribución, comunicación pública, transformación 
                    o cualquier otra forma de explotación de estos contenidos sin autorización expresa 
                    y por escrito del titular de los derechos.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Responsabilidad */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Scale className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">5. Limitación de Responsabilidad</h2>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="space-y-4">
                <p className="text-purple-800">
                  WasabiTel pone todos los medios a su alcance para garantizar la disponibilidad y 
                  funcionamiento del sitio web, sin embargo, no puede garantizar la ausencia total 
                  de errores o el funcionamiento ininterrumpido del mismo.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-900 mb-2">🛡️ Exclusiones de Responsabilidad</h4>
                    <ul className="space-y-1 text-purple-800 text-sm">
                      <li>• Interrupciones del servicio web</li>
                      <li>• Errores en la información publicada</li>
                      <li>• Daños por virus o malware</li>
                      <li>• Pérdida de datos o información</li>
                      <li>• Daños indirectos o consecuenciales</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-900 mb-2">⚡ Casos de Fuerza Mayor</h4>
                    <ul className="space-y-1 text-purple-800 text-sm">
                      <li>• Catástrofes naturales</li>
                      <li>• Fallos en infraestructuras de terceros</li>
                      <li>• Ataques cibernéticos externos</li>
                      <li>• Decisiones gubernamentales</li>
                      <li>• Huelgas o conflictos laborales</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-purple-800 text-sm">
                  <strong>Nota importante:</strong> Esta limitación de responsabilidad no afecta a los derechos 
                  reconocidos por la legislación de protección de consumidores y usuarios que resulten de aplicación.
                </p>
              </div>
            </div>
          </section>

          {/* Enlaces externos */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">6. Enlaces a Sitios Web de Terceros</h2>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <p className="text-green-800 mb-4">
                Este sitio web puede contener enlaces a sitios web de terceros. WasabiTel no controla 
                ni se hace responsable del contenido, políticas de privacidad o prácticas de estos sitios externos.
              </p>
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-bold text-green-900 mb-2">📋 Política de Enlaces</h4>
                <ul className="space-y-1 text-green-800 text-sm">
                  <li>• Los enlaces se proporcionan únicamente para conveniencia del usuario</li>
                  <li>• WasabiTel no respalda el contenido de sitios web externos</li>
                  <li>• El acceso a enlaces externos es bajo la responsabilidad del usuario</li>
                  <li>• Se recomienda revisar las políticas de privacidad de sitios externos</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Legislación aplicable */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Scale className="w-6 h-6 text-gray-600" />
              <h2 className="text-2xl font-bold text-gray-900">7. Legislación Aplicable y Jurisdicción</h2>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <div className="space-y-4">
                <p className="text-gray-700">
                  Este aviso legal se rige íntegramente por la legislación española. Para la resolución 
                  de cualquier controversia que pudiera derivarse del acceso o uso de este sitio web, 
                  las partes se someten expresamente a la jurisdicción de los Juzgados y Tribunales de Madrid.
                </p>
                
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">📚 Normativa Aplicable</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Ley 34/2002, de Servicios de la Sociedad de la Información</li>
                    <li>• Ley Orgánica 3/2018, de Protección de Datos Personales</li>
                    <li>• Ley 7/1998, sobre Condiciones Generales de la Contratación</li>
                    <li>• Real Decreto Legislativo 1/2007, Ley General de Consumidores</li>
                    <li>• Reglamento (UE) 2016/679 (RGPD)</li>
                  </ul>
                </div>
                
                <p className="text-gray-700 text-sm">
                  Las partes renuncian expresamente a cualquier otro fuero que pudiera corresponderles, 
                  sometiéndose a la jurisdicción y competencia de los tribunales de Madrid.
                </p>
              </div>
            </div>
          </section>

          {/* Contacto */}
          <section>
            <div className="bg-gradient-to-r from-teal-50 to-orange-50 border border-teal-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">📞 Contacto Legal</h3>
              <p className="text-gray-700 mb-4">
                Para cualquier consulta relacionada con este aviso legal o el uso del sitio web:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Email</div>
                    <div className="text-gray-600 text-sm">originbycarlos@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Teléfono</div>
                    <div className="text-gray-600 text-sm">634 09 31 97</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Dirección</div>
                    <div className="text-gray-600 text-sm">Calle Andarella, Num 2<br/>46950 Xirivella (Valencia)</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500 text-center">
              Última actualización: Febrero 2026. WasabiTel se reserva el derecho de modificar
              este aviso legal en cualquier momento, publicando las modificaciones en este mismo sitio web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;