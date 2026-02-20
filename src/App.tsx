import React, { lazy, Suspense } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhyChoose from './components/WhyChoose';
import MobilePlans from './components/MobilePlans';
import FiberPlans from './components/FiberPlans';
import PremiumServices from './components/PremiumServices';
import SecurityServices from './components/SecurityServices';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import AlarmForm from './components/AlarmForm';
import CallRequestForm from './components/CallRequestForm';
import CookiePopup from './components/CookiePopup';

const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./components/TermsConditions'));
const LegalNotice = lazy(() => import('./components/LegalNotice'));
const CookiePolicy = lazy(() => import('./components/CookiePolicy'));

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsConditions, setShowTermsConditions] = useState(false);
  const [showAlarmForm, setShowAlarmForm] = useState(false);
  const [showCallRequestForm, setShowCallRequestForm] = useState(false);
  const [showLegalNotice, setShowLegalNotice] = useState(false);
  const [showCookiePolicy, setShowCookiePolicy] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openContactForm = (service = '') => {
    setSelectedService(service);
    setShowContactForm(true);
  };

  const closeContactForm = () => {
    setShowContactForm(false);
    setSelectedService('');
  };

  const openAlarmForm = () => {
    setShowAlarmForm(true);
  };

  const closeAlarmForm = () => {
    setShowAlarmForm(false);
  };

  const openCallRequestForm = () => {
    setShowCallRequestForm(true);
  };

  const closeCallRequestForm = () => {
    setShowCallRequestForm(false);
  };

  // Handle policy navigation
  React.useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/politica-privacidad') {
        setShowPrivacyPolicy(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (path === '/terminos-condiciones') {
        setShowTermsConditions(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (path === '/aviso-legal') {
        setShowLegalNotice(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (path === '/cookies') {
        setShowCookiePolicy(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setShowPrivacyPolicy(false);
        setShowTermsConditions(false);
        setShowLegalNotice(false);
        setShowCookiePolicy(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState(); // Check initial URL

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll to top whenever any policy page opens or closes
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [showPrivacyPolicy, showTermsConditions, showLegalNotice, showCookiePolicy]);

  const LoadingSpinner = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin"></div>
    </div>
  );

  if (showPrivacyPolicy) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <PrivacyPolicy onBack={() => {
          setShowPrivacyPolicy(false);
          window.history.pushState({}, '', '/');
        }} />
      </Suspense>
    );
  }

  if (showTermsConditions) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <TermsConditions onBack={() => {
          setShowTermsConditions(false);
          window.history.pushState({}, '', '/');
        }} />
      </Suspense>
    );
  }

  if (showLegalNotice) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <LegalNotice onBack={() => {
          setShowLegalNotice(false);
          window.history.pushState({}, '', '/');
        }} />
      </Suspense>
    );
  }

  if (showCookiePolicy) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <CookiePolicy onBack={() => {
          setShowCookiePolicy(false);
          window.history.pushState({}, '', '/');
        }} />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onContactClick={openContactForm} />
      <Hero onContactClick={openContactForm} />
      <Stats />
      <WhyChoose />
      <MobilePlans onContactClick={openContactForm} />
      <FiberPlans onContactClick={openContactForm} />
      <PremiumServices onContactClick={openContactForm} />
      <SecurityServices onContactClick={openContactForm} onAlarmClick={openAlarmForm} />
      <Footer onCallRequestClick={openCallRequestForm} />
      
      <CookiePopup />
      
      <ContactForm 
        isOpen={showContactForm}
        onClose={closeContactForm}
        selectedService={selectedService}
      />
      
      <AlarmForm 
        isOpen={showAlarmForm}
        onClose={closeAlarmForm}
      />
      
      <CallRequestForm 
        isOpen={showCallRequestForm}
        onClose={closeCallRequestForm}
      />
    </div>
  );
}

export default App;