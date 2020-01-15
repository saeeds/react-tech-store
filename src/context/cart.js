// cart context

import React from 'react';
import localCart from '../utils/localCart';

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState(localCart);
  const [total, setTotal] = React.useState(0);
  const [cartItems, setCartItems] = React.useState(0);

  React.useEffect(() => {
    let newCartItems = cart.reduce((total, cartItem) => {
      console.log({ total, cartItem });
      return total;
    }, 0)
  }, [cart]);
  //remove item 
  const removeItem = id => { };
  //increase amount 
  const increaseAmount = id => { };
  //decrease amount 
  const decreaseAmount = id => { };
  //add to cart 
  const addToCart = product => { };
  //clear cart 
  const clearCart = () => { };

  return (<CartContext.Provider value={{ cart, total, cartItems, removeItem, increaseAmount, decreaseAmount, addToCart, clearCart }}>
    {children}
  </CartContext.Provider>)
}

export { CartContext, CartProvider };