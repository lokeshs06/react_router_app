import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      return JSON.parse(savedCart);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // If it's already in the cart, do nothing or we could increase quantity
        // The requirements say "If the product is already in the cart display 'Remove from Cart' button"
        // So we just add it once with quantity 1
        return prevItems;
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === productId) {
          const newQuantity = item.quantity + amount;
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 }; // prevent quantity going below 1
        }
        return item;
      })
    );
  };

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const cartTotalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const cartSubtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = cartSubtotal * 0.1;
  const finalPrice = cartSubtotal - discount;

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    isInCart,
    cartTotalQuantity,
    cartSubtotal,
    discount,
    finalPrice
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
