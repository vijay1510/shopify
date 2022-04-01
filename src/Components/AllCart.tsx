import React from "react";
import Cart from "./Cart";

export default function AllCart() {
  return (
    <>
      <Cart />
      <Cart />
      <Cart />
      <div>
        <p>total items</p>
        <p> total price</p>
      </div>
      <button>PLACE ORDER</button>
    </>
  );
}
