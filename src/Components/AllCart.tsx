import React from "react";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { InitialState } from "../Redux/Reducer";
import { Products } from "../Redux/Action";
import { Link } from "react-router-dom";

export default function AllCart() {
  const cart = useSelector((state: InitialState) => state.cart) as Products[];
  const amount = useSelector(
    (state: InitialState) => state.amount
  ) as Products[];

  const totalPrice = amount.reduce(
    (acc: number, val) => Math.round(acc + val.amount * val.price),
    0
  );

  return (
    <>
      <div className='allcart'>
        {cart.map((item) => {
          return <Cart key={item.id} {...item} />;
        })}
      </div>
      <hr />
      <div className='allcart_items'>
        <p>total items: {cart.length}</p>
        <p>total price: {totalPrice}</p>
      </div>
      <div className='allcart_button'>
        <Link to='/secret'>
          {totalPrice !== 0 && (
            <button className='allcart_btn'>PLACE ORDER</button>
          )}
        </Link>
      </div>
    </>
  );
}
