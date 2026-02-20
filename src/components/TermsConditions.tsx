import React from 'react';
import { ArrowLeft, FileText, AlertCircle, Shield, Phone, Mail, Smartphone, BarChart3, Lock } from 'lucide-react';

interface TermsConditionsProps {
  onBack: () => void;
}

const TermsConditions: React.FC<TermsConditionsProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-teal-600 hover:text-teal-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver
          </button>

          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-orange-600 rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Condiciones del Servicio</h1>
              <p className="text-gray-600 mt-2">WasabiTel - Última actualización: Febrero 2026</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <AlertCircle className="w-6 h-6 text-teal-600" />
              <h2 className="text-2xl font-bold text-gray-900">1. Descripción del Servicio y Uso Comercial</h2>
            </div>
            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-xl">
              <p className="text-gray-700 leading-relaxed mb-4">
                WasabiTel ofrece servicios de asesoría integral en <strong>telefonía, energía y seguros</strong>, operando con marcas propias.
              </p>
              <div className="bg-teal-100 p-4 rounded-lg space-y-2">
                <p className="text-teal-900">
                  • Nuestros servicios están destinados exclusivamente a fines empresariales, comerciales y profesionales; no están diseñados para uso personal o doméstico.
                </p>
                <p className="text-teal-900">
                  • El usuario declara tener al menos 18 años y contar con la capacidad legal para contratar estos servicios.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Smartphone className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">2. Comunicaciones mediante WhatsApp Business</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                Al interactuar con nosotros a través de WhatsApp, el cliente acepta las siguientes normas de comunicación:
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                <h3 className="font-bold text-lg text-green-900 mb-3">Consentimiento Explícito</h3>
                <p className="text-green-800">
                  Solo enviaremos mensajes a personas que hayan proporcionado su número de teléfono y hayan otorgado su consentimiento explícito para ser contactadas por este medio.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                <h3 className="font-bold text-lg text-green-900 mb-3">Derecho de Cancelación</h3>
                <p className="text-green-800">
                  Respetaremos de inmediato cualquier solicitud de baja, bloqueo o interrupción de las comunicaciones. El usuario puede revocar su consentimiento en cualquier momento.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                <h3 className="font-bold text-lg text-green-900 mb-3">Prohibición de Spam</h3>
                <p className="text-green-800">
                  WasabiTel no enviará contenido masivo no deseado, fraudulento ni engañoso.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">3. Privacidad y Protección de Datos</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                La seguridad de tus datos es nuestra prioridad. En cumplimiento con el RGPD y las políticas de Meta:
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <h3 className="font-bold text-lg text-blue-900 mb-3">Responsable del Tratamiento</h3>
                <p className="text-blue-800">
                  WasabiTel actúa como el responsable del tratamiento de los datos personales de sus clientes. Meta Platforms actúa como encargado del tratamiento para facilitar la prestación del servicio de mensajería.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <h3 className="font-bold text-lg text-blue-900 mb-3">Seguridad</h3>
                <p className="text-blue-800">
                  Implementamos medidas técnicas y organizativas para proteger la integridad de los datos. La información de contacto sensible se cifrará mediante métodos de hashing antes de ser transmitida a herramientas de análisis de Meta.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <h3 className="font-bold text-lg text-blue-900 mb-3">Datos Prohibidos</h3>
                <p className="text-blue-800">
                  No se solicitarán ni se deberán compartir a través de WhatsApp números completos de tarjetas de pago, cuentas bancarias, documentos de identidad ni información médica sensible.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-4">
              <AlertCircle className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-900">4. Limitaciones Importantes</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="font-bold text-lg text-red-900 mb-3">Servicios de Emergencia</h3>
                <p className="text-red-800">
                  Se informa expresamente que los servicios de WasabiTel a través de WhatsApp <strong>no proporcionan acceso a servicios de emergencia</strong> (policía, bomberos u hospitales). El cliente debe asegurarse de contar con medios alternativos (telefonía fija o móvil) para contactar con dichos servicios.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                <h3 className="font-bold text-lg text-yellow-900 mb-3">Disponibilidad</h3>
                <p className="text-yellow-800">
                  El servicio puede sufrir interrupciones temporales por mantenimiento o causas de fuerza mayor fuera de nuestro control.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">5. Conducta del Usuario y Prohibiciones</h2>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
              <p className="text-purple-900 mb-4 font-medium">
                Queda estrictamente prohibido el uso de nuestros canales para:
              </p>
              <ul className="space-y-2 text-purple-800">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Compartir contenido ilegal, ofensivo, difamatorio o que infrinja derechos de propiedad intelectual de terceros.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Suplantar la identidad de otras personas o entidades.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Distribuir virus, datos dañados o cualquier archivo perjudicial.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-6 h-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-900">6. Modificaciones y Contacto</h2>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
              <p className="text-orange-800 mb-4">
                WasabiTel se reserva el derecho de actualizar estas condiciones para reflejar cambios en la legislación o en las políticas de Meta. El uso continuado del servicio tras dichas actualizaciones implica su aceptación.
              </p>
              <p className="text-orange-800">
                Para cualquier consulta, puede contactarnos a través de nuestra web oficial: <strong>wasabitel.com</strong>
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-4">
              <BarChart3 className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">7. Cláusula de Herramientas de Meta (Píxel y Conversiones)</h2>
            </div>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
              <p className="text-indigo-800 mb-4">
                Informamos a nuestros usuarios que este sitio web utiliza tecnologías de seguimiento y almacenamiento de terceros, incluido el Píxel de Meta y otras herramientas comerciales de Meta Platforms, Inc. Estas herramientas permiten recopilar o recibir información sobre las acciones que realizas en nuestro sitio para proporcionar servicios de medición, segmentación y entrega de anuncios dirigidos.
              </p>
              <div className="bg-indigo-100 p-4 rounded-lg">
                <h4 className="font-bold text-indigo-900 mb-2">Gestión de Preferencias</h4>
                <p className="text-indigo-800 text-sm mb-2">
                  Los usuarios pueden gestionar sus preferencias o revocar el uso de su información para fines publicitarios a través de los siguientes mecanismos externos:
                </p>
                <ul className="space-y-1 text-indigo-800 text-sm">
                  <li>• Digital Advertising Alliance: <a href="http://www.aboutads.info/choices" className="underline hover:text-indigo-900" target="_blank" rel="noopener noreferrer">http://www.aboutads.info/choices</a></li>
                  <li>• European Interactive Digital Advertising Alliance: <a href="http://www.youronlinechoices.eu" className="underline hover:text-indigo-900" target="_blank" rel="noopener noreferrer">http://www.youronlinechoices.eu</a></li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Smartphone className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">8. Cláusula Específica para WhatsApp Business</h2>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
              <p className="text-green-800 mb-4">
                En cumplimiento con la Política de Mensajes de WhatsApp Business, WasabiTel solo contactará a los usuarios que hayan proporcionado su número de teléfono celular de forma voluntaria y hayan otorgado su consentimiento explícito para recibir comunicaciones.
              </p>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  El consentimiento se obtiene de forma independiente para cada categoría de mensaje (ej. actualizaciones de servicio, ofertas comerciales o soporte técnico).
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  El usuario tiene el derecho de revocar este consentimiento en cualquier momento enviando la palabra 'BAJA' o a través de los canales de atención al cliente.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Nos comprometemos a respetar de inmediato cualquier solicitud de bloqueo o cancelación de comunicaciones, eliminando al usuario de nuestras listas de contacto de WhatsApp.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">9. Responsabilidades y Protección de Datos (RGPD)</h2>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <p className="text-blue-800 mb-4">
                De acuerdo con el Reglamento General de Protección de Datos (RGPD), WasabiTel actúa como el Responsable del Tratamiento de los datos de sus clientes. Al utilizar los servicios de WhatsApp Business, instruimos a Meta (Meta Platforms Ireland Ltd.) para que actúe como nuestro Encargado del Tratamiento para gestionar la transmisión de mensajes y análisis de datos asociados.
              </p>
              <p className="text-blue-800">
                WasabiTel garantiza que no compartirá con Meta datos confidenciales como números de cuentas bancarias completas, información médica, datos financieros ni información relacionada con menores de 13 años.
              </p>
            </div>
          </section>

          <section>
            <div className="bg-gradient-to-r from-teal-50 to-orange-50 border border-teal-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Información de Contacto del Negocio</h3>
              <p className="text-gray-700 mb-4">
                Para cualquier consulta relacionada con la privacidad o el ejercicio de tus derechos, puedes contactarnos en:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Correo electrónico</div>
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
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Sitio Web</div>
                    <div className="text-gray-600 text-sm">wasabitel.com</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500 text-center">
              Estas condiciones del servicio están sujetas a la legislación española y cumplen con las políticas de Meta Platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
