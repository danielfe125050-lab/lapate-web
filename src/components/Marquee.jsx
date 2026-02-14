import React from 'react';

const Marquee = ({ text, rotation = 0, bg = "bg-brand-black", textCol = "text-white" }) => {
    return (
        <div className={`relative overflow-hidden py-4 ${bg} border-y-4 border-black transform ${rotation} z-30`}>
            <div className="animate-marquee whitespace-nowrap flex gap-8">
                {[...Array(10)].map((_, i) => (
                    <span key={i} className={`text-4xl md:text-5xl font-display uppercase tracking-widest ${textCol}`}>
                        {text} <span className="mx-4 text-brand-red">★</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
