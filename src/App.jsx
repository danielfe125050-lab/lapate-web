import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuGrid from './components/MenuGrid';
import ContactSection from './components/ContactSection';
import Marquee from './components/Marquee';
import Testimonials from './components/Testimonials';
import AboutSection from './components/AboutSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-brand-yellow font-body overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* Visual Separator with Marquee */}
      <div className="relative z-30 -my-8 text-shadow-hard">
        <Marquee text="TIENE HAMBRE? PARCE COMA RICO NO COMA CUENTO" rotation="rotate-2" />
      </div>

      <MenuGrid />

      {/* Visual Separator with Marquee */}
      <div className="relative z-30 -my-8">
        <Marquee text="PEDIDOS AL WHATSAPP - DOMICILIOS RAPIDOS" rotation="-rotate-1" bg="bg-brand-red" textCol="text-brand-yellow" />
      </div>

      <Marquee text="★ COMIDA CON ALMA ★ PERRO SALCHICHA ★ LA PATE ★" direction="right" color="bg-brand-black" textColor="text-brand-yellow" rotate={-1} />

      <AboutSection />

      <Marquee text="★ CLIENTES FELICES ★ SÁBADO DE PARCHE ★ LA MEJOR COMIDA ★" direction="right" color="bg-brand-red" textColor="text-white" rotate={2} />

      <Testimonials />

      <Marquee text="📍 VISÍTANOS YA 📍 VISÍTANOS YA 📍 VISÍTANOS YA 📍" direction="left" color="bg-brand-green" textColor="text-brand-black" rotate={-1} />

      <ContactSection />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
