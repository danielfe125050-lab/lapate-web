import React from 'react';
import ScrollReveal from './ScrollReveal';
import Marquee from './Marquee';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Laura Gómez",
            content: "Un lugar que vale totalmente la pena conocer 💛 Nos atendió una mesera súper querida y probamos las pate 2.0 ¡deliciosas! 🤤 El ambiente es muy hermoso, lleno de detalles y mucha creatividad. Se nota el amor con el que hacen todo ✨",
            rating: 5,
            source: "Google Reviews"
        },
        {
            id: 2,
            name: "Juan Ramirez",
            content: "Fue la primera vez que estuve en el lugar después de tantas recomendaciones... la verdad todo fue un 10/10 tanto el espacio como la comida es espectacular, (prueben el donky bifasico) Bastante comida y mucho sabor... 🤘",
            rating: 5,
            source: "Google Reviews"
        },
        {
            id: 3,
            name: "Diego Alejandro Sanchez",
            content: "Increíble, sencillamente Comida Excelente, buen servicio y buenos precios. Muy buena atención y una pasta con Hongos y tocineta 10/10 🌟 Muchas gracias a las personas que la prepararon. Super Recomendado. 🥰",
            rating: 5,
            source: "Google Reviews"
        },
        {
            id: 4,
            name: "Camila Palacio",
            content: "Un lugar estéticamente increíble y comida de sabor gourmet! Me pedí las choripapas que tenían un toque de salsa de pimentón dulce exquisito! nunca había probado algo así. Una porción es suficiente para quedarme lleno. 🌭🔥",
            rating: 5,
            source: "Local Guide"
        }
    ];

    return (
        <section className="py-20 bg-brand-yellow relative overflow-hidden">

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal animation="fade-up">
                    <h2 className="text-5xl md:text-7xl font-display md:font-marker text-center uppercase mb-16 transform -rotate-2 drop-shadow-[4px_4px_0px_#fff]">
                        LO QUE DICE LA BANDA 🗣️
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review, index) => (
                        <ScrollReveal key={review.id} animation="fade-up" delay={index * 100}>
                            <div className="bg-white border-4 border-black p-6 h-full flex flex-col justify-between card-shadow hover:-translate-y-2 hover:shadow-[8px_8px_0px_#000] transition-all duration-300">

                                <div className="mb-4">
                                    <div className="flex text-brand-yellow mb-2 space-x-1 text-2xl drop-shadow-[1px_1px_0px_#000]">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <span key={i}>★</span>
                                        ))}
                                    </div>
                                    <p className="font-body font-bold text-lg leading-tight mb-4">
                                        "{review.content}"
                                    </p>
                                </div>

                                <div className="border-t-2 border-black pt-4 flex items-center justify-between">
                                    <div>
                                        <p className="font-display uppercase text-xl">{review.name}</p>
                                        <p className="text-xs font-bold text-gray-500 uppercase">{review.source}</p>
                                    </div>
                                    <div className="w-10 h-10 bg-brand-red rounded-full border-2 border-black flex items-center justify-center text-white font-bold">
                                        {review.name.charAt(0)}
                                    </div>
                                </div>

                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {/* Decorative Marquee in background */}
            <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 -rotate-3 opacity-10 pointer-events-none">
                <div className="whitespace-nowrap font-marker text-9xl">
                    SABOR BRUTAL • AMBIENTE ÉPICO • COMIDA REAL •
                </div>
            </div>

        </section>
    );
};

export default Testimonials;
