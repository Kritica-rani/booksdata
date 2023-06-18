import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function SingleBook({ product, setCart }) {
  const { name ,cart,setCart} = useContext(CartContext);
  const handleAddToCart = ()=>{
    setCart([...cart,product]);
  }
  const isInCart = cart.includes(product);
  const handleRemoveToCart = (product)=>{
     const updatedCart = cart.filter((item) => item.id !== product.id);
        setCart(updatedCart);
  }
  return (
     <div className="product">
       <div className="card">
       <h1>{name}</h1>
      <img src={product.img} alt="booksimage" />
      <div className="product-description">
        <p>{product.name}</p>
        <p className="B-desc"><i>{product.description}</i></p>
      </div>
    <div className="CartPrice">
    {isInCart?<button onClick={()=>handleRemoveToCart(product)}>REMOVE TO CART</button>:
                    <button onClick={handleAddToCart}>ADD TO CART</button>}
      <p className="B-price">Rs.{product.price}</p>
    </div>
       </div>
     </div>
  );
}
