import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const MenuGrid = () => {
    const [activeCategory, setActiveCategory] = useState('platos');

    const categories = [
        { id: 'platos', label: 'Platos Principales' },
        { id: 'entradas', label: 'Entradas' },
        { id: 'bebidas', label: 'Bebidas' },
        { id: 'postres', label: 'Postres' },
        { id: 'adiciones', label: 'Adiciones' },
    ];

    // Real Data from User Image
    const menuItems = {
        platos: [
            // Especialidades / Papas
            {
                id: 1,
                name: "CHORIPAPAS",
                price: "$ 26.000",
                description: "Papas fritas, mozzarela, salsas de la casa, chorizo La Pate, puerros fritos",
                tag: "FAVORITO",
                image: "/choripapas.jpeg"
            },
            {
                id: 2,
                name: "PAPATE 2.0",
                price: "$ 26.000",
                description: "Papas con carne caramelizada y mix de quesos (Cheddar, parmesano, mozarella y sour cream)",
                tag: "NUEVO",
                image: "/Papate 2.0.jpeg"
            },
            // Pastas
            {
                id: 3,
                name: "LASAÑA",
                price: "$ 26.000",
                description: "Carne de res y cerdo en salsa bechamel, pomodoro, pesto y vinagre balsámico",
                tag: null,
                image: "/lasaña.jpeg"
            },
            {
                id: 4,
                name: "PASTA POMODORO",
                price: "$ 24.000",
                description: "Pasta corta en salsa clásica italiana con finas hierbas, queso y chorizo La Pate",
                tag: null,
                image: "/Pasta Pomodoro.jpeg"
            },
            {
                id: 5,
                name: "PASTAS DE HONGOS",
                price: "$ 25.000",
                description: "Pasta corta en salsa de hongos, tocineta, queso azul al vino tinto",
                tag: "GOURMET",
                image: "/Pastas de Hongos.jpeg"
            },
            // Hamburguesas (Grouped)
            {
                id: 6,
                name: "CHEESE BACON",
                price: "$ 28.000",
                priceCombo: "$ 31.000 con papas",
                description: "Burger clásica 180g res, tocineta, pepinillos, pan masa madre, doble cheddar, tomate",
                tag: "CLÁSICO",
                image: "/Cheese bacon.jpeg"
            },
            {
                id: 7,
                name: "SWEET BACON",
                price: "$ 28.000",
                priceCombo: "$ 31.000 con papas",
                description: "Hamburguesa 180g res, mermelada tocineta, doble cheddar, salsa ajo, pepinillos, lechuga, salsa ahumada",
                tag: "DULCE",
                image: "/Sweet Bacon y papas.jpeg"
            },
            {
                id: 8,
                name: "BURGER ONION PHILADELPHIA",
                price: "$ 28.000",
                priceCombo: "$ 31.000 con papas",
                description: "Carne res 180g, pan masa madre, cremoso de quesos, cebollas caramelizadas vino tinto, lechuga, tomates",
                tag: "PREMIUM",
                image: "/Burger Onion philadelphia.jpeg"
            },
            {
                id: 9,
                name: "CHICKEN BURGER",
                price: "$ 28.000",
                priceCombo: "$ 31.000 con papas",
                description: "Pechuga apanada, ensalada repollo cremosa, queso mozarella, salsa chile dulce y picante, salsa ajo",
                tag: null,
                image: "/Chicken burger.jpeg"
            },
            // Burros
            {
                id: 10,
                name: "DONKY",
                price: "$ 27.000",
                description: "Burro: Carne cerdo marinada estilo mexicano, papas francesa, chorizo la pate, salsa rosada ahumada, ajo, ají",
                tag: "MEXICANO",
                image: "/Donky.jpeg"
            },
            {
                id: 11,
                name: "DONKY BIFÁSICO",
                price: "$ 33.000",
                description: "Burro: Carne cerdo y pollo marinada estilo mexicano, papas francesa, chorizo la pate, salsas...",
                tag: "GIGANTE",
                image: "/Donky.jpeg"
            },
        ],
        entradas: [
            // Ceviches
            {
                id: 12,
                name: "CEVICHE TRADICIONAL",
                price: "$ 23.000",
                description: "Ceviche de chorizo La Pate, cebolla, salsa tradicional colombiana, limón, cilantro, mousse de aguacate",
                tag: "FRESCO",
                image: "/Ceviche tradicional.jpeg"
            },
            {
                id: 13,
                name: "CEVICHE TEMPORADA",
                price: "$ 23.000",
                description: "Ceviche de chorizo La Pate, cebolla, mango, chiles dulces, limón, cilantro, mousse de aguacate",
                tag: "EXÓTICO",
                image: "/Ceviche Temporada.jpeg"
            },
            // Pizzas & Empanadas
            {
                id: 14,
                name: "PIZZA BIANCA",
                price: "$ 23.000",
                description: "Pizza en base cremosa, chorizo de la casa, pesto, vinagre balsámico y queso parmesano",
                tag: "GOURMET",
                image: "/Pizza Bianca.jpeg"
            },
            {
                id: 15,
                name: "CHORI-PIZZA",
                price: "$ 21.000",
                description: "Pizzeta personal en base margarita, chorizo La Pate y balsámico",
                tag: null,
                image: "/Chori-Pizza.jpeg"
            },
            {
                id: 16,
                name: "EMPANADAS",
                price: "$ 15.000",
                description: "Empanadas fritas con los rellenos variados de La Pate (6 unidades)",
                tag: "CRUJIENTE",
                image: "/Empanadas.jpeg"
            }
        ],
        bebidas: [
            { id: 14, name: "LIMONADA DE COCO", price: "$ 8.000", description: "Refrescante y cremosa", tag: null },
            { id: 15, name: "GASEOSAS", price: "$ 5.000", description: "Coca-Cola, Postobón, Pepsi", tag: null }
        ],
        postres: [
            {
                id: 16,
                name: "GALLETA CON HELADO",
                price: "$ 15.000",
                description: "Galleta con chips de chocolate, con salsa de frutos rojos, helado de vainilla",
                tag: "DULCE",
                image: "/Galleta con helado.jpeg"
            }
        ],
        adiciones: [
            { id: 17, name: "TOCINETA", price: "$ 4.000", description: "Porción extra de tocino", tag: null },
            { id: 18, name: "QUESO", price: "$ 3.000", description: "Doble porción de queso mozzarella", tag: null }
        ]
    };

    return (
        <section id="menu" className="py-20 px-4 bg-brand-yellow relative min-h-screen">

            {/* Section Header */}
            <div className="text-center mb-12 relative z-10">
                <h2 className="text-6xl md:text-8xl font-display md:font-marker uppercase transform -rotate-3 text-brand-black drop-shadow-[5px_5px_0px_#fff]">
                    EL MENÚ
                </h2>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-10 max-w-5xl mx-auto">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`font-display text-xl md:text-2xl uppercase px-6 py-2 border-4 border-black transition-all duration-300 transform ${activeCategory === cat.id
                            ? 'bg-brand-black text-brand-yellow -translate-y-2 shadow-[8px_8px_0px_#fff]'
                            : 'bg-white text-brand-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000]'
                            }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {menuItems[activeCategory]?.map((item, index) => (
                    <ScrollReveal key={item.id} animation="fade-up" delay={index * 100}>
                        <div
                            className={`bg-white border-4 border-black p-6 card-shadow h-full flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_#000] relative group`}
                        >
                            {item.tag && (
                                <div className="absolute -top-4 -right-4 bg-brand-red text-white font-display text-lg px-3 py-1 border-2 border-black transform rotate-2 z-20 shadow-[2px_2px_0px_#000]">
                                    {item.tag}
                                </div>
                            )}

                            {/* Image */}
                            <div className="w-full aspect-[4/3] bg-brand-black/5 border-2 border-black flex items-center justify-center overflow-hidden relative mb-6 group-hover:rotate-1 transition-transform">
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <span className="text-5xl">🌭</span>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col text-left w-full">
                                <h3 className="text-3xl font-display uppercase leading-none mb-2">{item.name}</h3>

                                {/* Price Section */}
                                <div className="mb-3">
                                    <span className="font-bold text-2xl text-brand-red mr-2">{item.price}</span>
                                    {item.priceCombo && (
                                        <span className="font-bold text-lg text-brand-black/70 block md:inline">
                                            o <span className="text-brand-black underline decoration-2">{item.priceCombo}</span>
                                        </span>
                                    )}
                                </div>

                                <p className="text-sm font-bold uppercase leading-tight text-gray-700 mb-6 flex-grow">
                                    {item.description}
                                </p>

                                <a
                                    href={`https://wa.me/573027703386?text=${encodeURIComponent(`Hola La Pate! 🌭 Quiero pedir: ${item.name}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-brand-black text-brand-yellow font-display text-xl uppercase py-2 hover:bg-brand-yellow hover:text-black border-2 border-transparent hover:border-black transition-colors shadow-[4px_4px_0px_#666] hover:shadow-none hover:translate-x-1 hover:translate-y-1 mt-auto text-center block"
                                >
                                    ¡LO QUIERO!
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            {/* Decorative Background Elements & Illustrations */}
            <img
                src="/ilustracion2.png"
                alt="Mascota comiendo"
                className={`hidden md:block absolute bottom-10 -left-20 w-96 md:w-[700px] transform rotate-12 transition-opacity duration-500 pointer-events-none z-20 ${activeCategory === 'platos' || activeCategory === 'adiciones' ? 'opacity-100' : 'opacity-0'}`}
            />

            <img
                src="/Illustracion1.png"
                alt="Mascota disfrazada"
                className={`hidden md:block absolute top-20 -right-20 w-80 md:w-[600px] transform -rotate-12 transition-opacity duration-500 pointer-events-none z-20 ${activeCategory === 'entradas' || activeCategory === 'postres' ? 'opacity-100' : 'opacity-0'}`}
            />

            <div className="absolute top-20 left-0 w-32 h-32 bg-brand-green rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
            <div className="absolute bottom-20 right-0 w-48 h-48 bg-brand-red rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>

        </section>
    );
};

export default MenuGrid;
