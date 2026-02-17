import React from 'react';
import ScrollReveal from './ScrollReveal';

const AboutSection = () => {
    return (
        <section className="py-20 px-4 bg-brand-black text-brand-yellow relative overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10 flex flex-col md:flex-row items-center gap-12">

                {/* Image */}
                <div className="w-full md:w-1/2">
                    <ScrollReveal animation="slide-in-left">
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-red transform translate-x-4 translate-y-4 border-4 border-white rounded-lg"></div>
                            <div className="relative border-4 border-white rounded-lg overflow-hidden card-shadow shadow-[8px_8px_0px_#EF4444] transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="/quieneslapate.jpeg"
                                    alt="Quién es La Pate"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <ScrollReveal animation="slide-in-right" delay={200}>
                        <h2 className="text-5xl md:text-7xl font-display md:font-marker uppercase mb-6 transform rotate-1 drop-shadow-[4px_4px_0px_#fff]">
                            ¿QUIÉN ES <br />
                            <span className="text-white text-shadow-hard">LA PATE?</span>
                        </h2>

                        <div className="bg-white text-brand-black p-6 md:p-8 border-4 border-brand-yellow card-shadow shadow-[8px_8px_0px_#F59E0B] transform rotate-1">
                            <p className="font-display uppercase text-2xl md:text-3xl mb-4 leading-none">
                                "Comida con alma de perro salchicha"
                            </p>
                            <p className="font-bold text-lg leading-relaxed mb-6">
                                Somos más que un restaurante, somos una familia que ama comer rico y pasarla bien.
                                Inspirados en nuestra mascota, creamos platos GIGANTES, llenos de sabor y con ese toque casero que te hace volver.
                            </p>
                            <p className="font-bold text-lg leading-relaxed">
                                Aquí no se viene a dieta, ¡se viene a ser feliz! 🌭💛
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

            </div>

            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow rounded-full blur-[100px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red rounded-full blur-[100px] opacity-20"></div>

        </section>
    );
};

export default AboutSection;
