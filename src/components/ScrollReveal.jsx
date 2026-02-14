import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, animation = 'fade-up', delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px',
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const getAnimationClass = () => {
        switch (animation) {
            case 'fade-up':
                return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20';
            case 'slide-in-left':
                return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20';
            case 'slide-in-right':
                return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20';
            case 'rotate-pop':
                return isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 rotate-12';
            default:
                return isVisible ? 'opacity-100' : 'opacity-0';
        }
    };

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${getAnimationClass()}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
