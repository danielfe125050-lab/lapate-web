import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-brand-black">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="/Video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-yellow/80 via-transparent to-black/40"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">

                {/* Rotating Badge / Pre-title */}
                <div className="mb-6 animate-float">
                    <span className="inline-block bg-brand-green text-white font-display uppercase text-xl md:text-2xl px-4 py-1 transform -rotate-3 border-2 border-black card-shadow">
                        ¡La solución está aquí!
                    </span>
                </div>

                {/* Main Headline */}
                <h1 className="flex flex-col items-center justify-center">
                    <span className="text-6xl md:text-8xl lg:text-9xl font-display text-white uppercase leading-[0.85] tracking-tighter text-shadow-hard transform -rotate-2 mb-2">
                        PARCE
                    </span>
                    <span className="text-4xl md:text-6xl lg:text-7xl font-display text-brand-yellow uppercase leading-[0.85] tracking-tighter text-shadow-hard transform rotate-1">
                        ¿TIENE UN PROBLEMA?
                    </span>
                </h1>

                {/* Dish Details Card - Removed per user request */}

                {/* Mascot Peeking */}
                <div className="hidden md:block absolute bottom-0 right-0 md:right-10 w-64 md:w-[500px] transform translate-y-10 hover:translate-y-0 transition-transform duration-500 cursor-pointer z-20">
                    <img
                        src="/Illustracion1.png"
                        alt="Perrito curioso"
                        className="w-full h-auto drop-shadow-2xl"
                    />
                </div>

                {/* Call to Action Flow */}
                <div className="mt-12 flex flex-col md:flex-row gap-8 items-center justify-center">
                    <div className="group relative">
                        <a href="#menu" className="inline-block bg-brand-red text-white font-display text-2xl md:text-3xl uppercase px-8 py-3 transform -rotate-1 border-4 border-black card-shadow hover:scale-110 hover:rotate-0 transition-all duration-300">
                            SÍ, TENGO HAMBRE
                        </a>
                        {/* Decorative Arrow */}
                        <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 hidden md:block">
                            <span className="text-4xl">👉</span>
                        </div>
                    </div>

                    <a href="#menu" className="inline-block bg-white text-black font-display text-2xl md:text-3xl uppercase px-8 py-3 transform rotate-2 border-4 border-black card-shadow hover:bg-brand-yellow hover:scale-110 hover:-rotate-1 transition-all duration-300">
                        NO, PERO QUIERO
                    </a>
                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
                <span className="text-4xl">👇</span>
            </div>
        </section>
    );
};

export default Hero;
