import React, { Suspense, lazy } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Lazy Load Heavy Components
const MenuGrid = lazy(() => import('./components/MenuGrid'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const AboutSection = lazy(() => import('./components/AboutSection'));

// Simple Loading Spinner
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-brand-black"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-brand-yellow font-body overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* Visual Separator with Marquee */}
      <div className="relative z-30 -my-8 text-shadow-hard">
        <Marquee text="TIENE HAMBRE? PARCE COMA RICO NO COMA CUENTO" rotation="rotate-2" />
      </div>

      <Suspense fallback={<LoadingSpinner />}>
        <MenuGrid />
      </Suspense>

      {/* Visual Separator with Marquee */}
      <div className="relative z-30 -my-8">
        <Marquee text="PEDIDOS AL WHATSAPP - DOMICILIOS RAPIDOS" rotation="-rotate-1" bg="bg-brand-red" textCol="text-brand-yellow" />
      </div>

      <Marquee text="★ COMIDA CON ALMA ★ PERRO SALCHICHA ★ LA PATE ★" direction="right" color="bg-brand-black" textColor="text-brand-yellow" rotate={-1} />

      <Suspense fallback={<LoadingSpinner />}>
        <AboutSection />
      </Suspense>

      <Marquee text="★ CLIENTES FELICES ★ SÁBADO DE PARCHE ★ LA MEJOR COMIDA ★" direction="right" color="bg-brand-red" textColor="text-white" rotate={2} />

      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>

      <Marquee text="📍 VISÍTANOS YA 📍 VISÍTANOS YA 📍 VISÍTANOS YA 📍" direction="left" color="bg-brand-green" textColor="text-brand-black" rotate={-1} />

      <Suspense fallback={<LoadingSpinner />}>
        <ContactSection />
      </Suspense>

      <FloatingWhatsApp />
    </div>
  )
}

export default App
