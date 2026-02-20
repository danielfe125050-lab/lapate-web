import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cart, updateQuantity, totalPrice, totalItems, clearCart } = useCart();

    const formatWhatsAppMessage = () => {
        let message = "¡Hola La Pate! 🌭 Quiero hacer un pedido:\n\n";
        cart.forEach(item => {
            message += `✅ ${item.quantity}x ${item.name} - ${item.price}\n`;
        });
        message += `\n💰 *Total: $ ${totalPrice.toLocaleString('es-CO')}*`;
        message += "\n\n📍 ¿Me confirman el tiempo de entrega?";
        return encodeURIComponent(message);
    };

    const handleCheckout = () => {
        const whatsappUrl = `https://wa.me/573027703386?text=${formatWhatsAppMessage()}`;
        window.open(whatsappUrl, '_blank');
    };

    if (totalItems === 0 && !isOpen) return null;

    return (
        <>
            {/* Floating Cart Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-24 right-6 z-50 bg-brand-red text-white p-4 rounded-full border-4 border-black shadow-[4px_4px_0px_#000] hover:scale-110 active:scale-95 transition-all group"
            >
                <div className="relative">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="absolute -top-2 -right-2 bg-brand-yellow text-brand-black text-xs font-bold w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
                        {totalItems}
                    </span>
                </div>
            </button>

            {/* Cart Drawer Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-yellow border-l-8 border-brand-black z-[70] flex flex-col shadow-2xl"
                        >
                            {/* Header */}
                            <div className="p-6 border-b-4 border-brand-black bg-brand-black text-brand-yellow flex justify-between items-center">
                                <h2 className="text-3xl font-display uppercase tracking-wider">Tu Pedido</h2>
                                <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Cart Items */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                {cart.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center opacity-50 space-y-4">
                                        <span className="text-6xl">🌭</span>
                                        <p className="font-display text-xl uppercase">¡Tu carrito está vacío!</p>
                                    </div>
                                ) : (
                                    cart.map(item => (
                                        <div key={item.id} className="bg-white border-4 border-black p-4 card-shadow flex gap-4">
                                            {item.image && (
                                                <div className="w-20 h-20 border-2 border-black flex-shrink-0">
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                </div>
                                            )}
                                            <div className="flex-1">
                                                <h4 className="font-display uppercase text-lg leading-tight mb-1">{item.name}</h4>
                                                <p className="font-bold text-brand-red mb-2">{item.price}</p>
                                                <div className="flex items-center gap-3">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="w-8 h-8 bg-brand-black text-brand-yellow flex items-center justify-center font-bold border-2 border-black hover:bg-white hover:text-black transition-colors"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="font-display text-xl">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="w-8 h-8 bg-brand-black text-brand-yellow flex items-center justify-center font-bold border-2 border-black hover:bg-white hover:text-black transition-colors"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            {/* Footer */}
                            {cart.length > 0 && (
                                <div className="p-6 border-t-4 border-brand-black bg-white space-y-4">
                                    <div className="flex justify-between items-center px-2">
                                        <span className="font-display text-2xl uppercase">Total:</span>
                                        <span className="font-display text-3xl text-brand-red">$ {totalPrice.toLocaleString('es-CO')}</span>
                                    </div>
                                    <button
                                        onClick={handleCheckout}
                                        className="w-full bg-brand-green text-white font-display text-2xl uppercase py-4 border-4 border-black shadow-[4px_4px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                                    >
                                        Pedir por WhatsApp
                                    </button>
                                    <button
                                        onClick={clearCart}
                                        className="w-full text-brand-black/50 font-bold uppercase text-sm hover:text-brand-red transition-colors"
                                    >
                                        Vaciar Carrito
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Cart;
