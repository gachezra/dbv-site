'use client'

import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product, quantity) => {
    if (quantity > 0) {
      setSelectedProducts(prev => [...prev, { ...product, quantity }]);
    }
  };

  const removeFromCart = (index) => {
    setSelectedProducts(prev => prev.filter((_, i) => i !== index));
  };

  const toggleCart = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <CartContext.Provider 
      value={{ 
        selectedProducts, 
        addToCart, 
        removeFromCart, 
        isOpen, 
        toggleCart 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}