// ...existing code...
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("cart_v1");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart_v1", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item, quantity) => {
    setCart(prev => {
      const found = prev.find(p => p.id === item.id);
      if (found) {
        return prev.map(p =>
          p.id === item.id ? { ...p, quantity: Math.min((p.quantity + quantity), item.stock ?? Infinity) } : p
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const removeItem = (id) => setCart(prev => prev.filter(p => p.id !== id));
  const clearCart = () => setCart([]);

  const updateItemQuantity = (id, quantity) => {
    setCart(prev => prev.map(p => p.id === id ? { ...p, quantity: Math.max(1, Math.min(quantity, p.stock ?? Infinity)) } : p));
  };

  const increaseItem = (id) => {
    setCart(prev => prev.map(p => p.id === id ? { ...p, quantity: Math.min(p.quantity + 1, p.stock ?? Infinity) } : p));
  };

  const decreaseItem = (id) => {
    setCart(prev => {
      const item = prev.find(p => p.id === id);
      if (!item) return prev;
      if (item.quantity > 1) {
        return prev.map(p => p.id === id ? { ...p, quantity: p.quantity - 1 } : p);
      }
      // if quantity would go to 0, remove the item
      return prev.filter(p => p.id !== id);
    });
  };

  const isInCart = (id) => cart.some(p => p.id === id);

  const totalItems = useMemo(() => cart.reduce((s, i) => s + i.quantity, 0), [cart]);
  const totalPrice = useMemo(() => cart.reduce((s, i) => s + (i.price * i.quantity), 0), [cart]);

  return (
    <CartContext.Provider value={{
      cart, addItem, removeItem, clearCart,
      isInCart, totalItems, totalPrice,
      updateItemQuantity, increaseItem, decreaseItem
    }}>
      {children}
    </CartContext.Provider>
  );
}