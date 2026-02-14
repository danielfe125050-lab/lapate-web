import React from 'react';
import ScrollReveal from './ScrollReveal';

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 px-4 bg-brand-black text-brand-yellow relative overflow-hidden">

            <div className="max-w-4xl mx-auto relative z-10 text-center">

                <ScrollReveal animation="rotate-pop">
                    <h2 className="text-6xl md:text-8xl font-display md:font-marker uppercase transform rotate-2 mb-12 text-shadow-hard text-brand-yellow drop-shadow-[4px_4px_0px_#fff]">
                        ¿DÓNDE ESTAMOS?
                    </h2>
                </ScrollReveal>

                <ScrollReveal animation="slide-in-right" delay={200}>
                    <div className="bg-white text-brand-black border-4 border-brand-yellow p-8 md:p-12 transform -rotate-1 card-shadow shadow-[12px_12px_0px_#EF4444]">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-8">

                            {/* Info */}
                            <div>
                                <h3 className="text-4xl font-display uppercase mb-4 text-brand-red">VISÍTANOS</h3>
                                <p className="text-xl font-bold mb-2">📍 Cra 26 # 47-91</p>
                                <p className="text-xl font-bold mb-6">Buenos Aires, Medellín</p>

                                <h3 className="text-4xl font-display uppercase mb-4 text-brand-red">HORARIO</h3>
                                <div className="space-y-1">
                                    <p className="text-lg font-bold">Mar - Jue, Dom: <span className="text-brand-red">5pm - 10pm</span></p>
                                    <p className="text-lg font-bold">Vie - Sáb: <span className="text-brand-red">5pm - 11pm</span></p>
                                    <p className="text-lg font-bold">Lun: <span className="text-gray-500">CERRADO</span></p>
                                </div>
                            </div>

                            {/* Map Placeholder or Socials */}
                            <div className="flex flex-col justify-center items-center md:items-start space-y-6">
                                <a href="https://wa.me/573027703386" target="_blank" rel="noopener noreferrer" className="w-full bg-brand-green text-white font-display text-2xl uppercase py-4 text-center border-4 border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_#000] transition-all">
                                    WHATSAPP
                                </a>
                                <a href="#" className="w-full bg-[#E1306C] text-white font-display text-2xl uppercase py-4 text-center border-4 border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_#000] transition-all">
                                    INSTAGRAM
                                </a>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="w-full h-64 border-4 border-black box-content relative z-10 transform md:rotate-1">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.196384112999!2d-75.5562!3d6.2378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTQnMTYuMSJOIDc1wrAzMycyMi4zIlc!5e0!3m2!1sen!2sco!4v1620000000000!5m2!1sen!2sco"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Mapa de ubicación"
                            ></iframe>
                        </div>

                    </div>
                </ScrollReveal>

                <div className="mt-16">
                    <p className="text-white font-display text-2xl uppercase tracking-widest opacity-50">
                        © 2026 LA PATE - Hecho con hambre
                    </p>
                </div>
            </div>

            {/* Decor */}
            <div className="absolute top-0 left-0 w-full h-4 bg-brand-red"></div>
            <div className="absolute bottom-0 left-0 w-full h-4 bg-brand-green"></div>
        </section>
    );
};

export default ContactSection;
