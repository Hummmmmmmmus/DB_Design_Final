import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
        setSnackbarOpen(true);
    };

    const removeFromCart = (productId) => {
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct.quantity > 1) {
            setCart(cart.map(item =>
                item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            ));
        } else {
            setCart(cart.filter(item => item.id !== productId));
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, snackbarOpen, handleSnackbarClose }}>
            {children}
        </CartContext.Provider>
    );
};
