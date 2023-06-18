import React,{useContext} from 'react';
import { CartContext } from '../context/CartContext';
import SingleBook from './SingleBook';

export default function Cart() {
  const{cart} = useContext(CartContext);
  return (
    <div className='home'>
        {cart && cart.map((product)=>{
            return(
                <div className="container-book">
                    <SingleBook product={product}/>
                </div>
            );
        })}
    </div>
  )
}
