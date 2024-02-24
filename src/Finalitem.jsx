
import React from 'react';
import Products from './Products';
import { CartProvider } from './Cartcontext';
import CartItem from './CartItem';
import './CartItem.css'

const Finalitem = () => {
  return (
    <CartProvider>
    <div className="app">
      <div className="products">
        <Products />
      </div>
      <div className="cart">
        
        <CartItem />
      </div>
    </div>
  </CartProvider>
);
  
};

export default Finalitem;


