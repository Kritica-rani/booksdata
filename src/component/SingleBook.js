import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function SingleBook({ product, setCart }) {
  const { name } = useContext(CartContext);
  return (
    <div className="product">
      <h1>{name}</h1>
      <img src={product.img} alt="booksimage" />
      <div className="product-description">
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>Rs.{product.price}</p>
      </div>
      <button>ADD TO CART</button>
    </div>
  );
}
