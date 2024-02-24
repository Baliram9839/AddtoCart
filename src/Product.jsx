// Product.js
import React, { useContext } from 'react';
import { CartContext } from './Cartcontext';

const Product = ({ id, name, price }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h3>{name}</h3>
      <p style={{color:"red"}}>Price: {price}</p>
      <button onClick={() => addToCart({ id, name, price })} style={{backgroundColor:"#8e44ad"}}>Add to Cart</button>
    </div>
  );
};

export default Product;
