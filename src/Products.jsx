// Products.js
import React from 'react';
import Product from './Product'
import { CartContext } from './Cartcontext';
import CartItem from './CartItem';
import './App.css'
const Products = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },

   
  ];

  return (
    <div className='Prodeuct'>
      <h2>Products</h2>
      {products.map(product => (
        <Product name={product.name} price={product.price} />
      ))}

    </div>
  );
};

export default Products;
