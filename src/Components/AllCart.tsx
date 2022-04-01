import React from "react";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { InitialState } from "../Redux/Reducer";
import { Products } from "../Redux/Action";

export default function AllCart() {
  const cart = useSelector((state: InitialState) => state.cart) as Products[];
  return (
    <>
      <div className='allcart'>
        {cart.map((item) => {
          return <Cart key={item.id} {...item} />;
        })}
      </div>
      <hr />
      <div className='allcart_items'>
        <p>total items: 3</p>
        <p> total price: 2400</p>
      </div>
      <div className='allcart_button'>
        <button className='allcart_btn'>PLACE ORDER</button>
      </div>
    </>
  );
}
