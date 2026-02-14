import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [currentLogo, setCurrentLogo] = useState('/logo.png');
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentLogo(prev => prev === '/logo.png' ? '/logo2.png' : '/logo.png');
                setIsAnimating(false);
            }, 500); // Wait for fade out
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, []);

    const navLinks = [
        { name: 'INICIO', href: '#' },
        { name: 'MENÚ', href: '#menu' },
        { name: 'CONTACTO', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/80 py-2 shadow-lg backdrop-blur-md' : 'bg-transparent py-4'}`}>
            <div className="w-full px-6 md:px-12 flex justify-between items-center">

                {/* Logo with Animation */}
                <a href="#" className="flex-shrink-0 bg-brand-yellow p-1 md:p-2 rounded-lg border-2 md:border-4 border-black shadow-[4px_4px_0px_#fff] relative overflow-hidden group">
                    <img
                        src={currentLogo}
                        alt="LA PATE"
                        className={`h-16 md:h-24 object-contain transition-all duration-500 transform ${isAnimating ? 'opacity-0 scale-90 rotate-12' : 'opacity-100 scale-100 rotate-0'}`}
                    />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`font-display text-2xl uppercase tracking-wider transition-colors hover:text-brand-yellow ${scrolled ? 'text-white' : 'text-white text-shadow-hard'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="https://wa.me/573027703386" target="_blank" rel="noopener noreferrer" className="bg-brand-red text-white font-display text-xl uppercase px-6 py-2 border-2 border-white hover:bg-white hover:text-brand-red hover:border-brand-red transition-all shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                        PEDIR YA
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-10 h-10 drop-shadow-[2px_2px_0px_#000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-brand-black absolute top-full left-0 w-full p-4 border-t-4 border-brand-yellow flex flex-col gap-4 shadow-xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="font-display text-2xl text-white uppercase text-center py-2 hover:text-brand-yellow"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="https://wa.me/573027703386" target="_blank" rel="noopener noreferrer" className="bg-brand-red text-white font-display text-xl uppercase py-3 w-full border-2 border-white text-center">
                        PEDIR YA
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
