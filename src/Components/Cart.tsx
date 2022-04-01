import React, { useState } from "react";
import { Products, addToCart } from "../Redux/Action";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Cart(props: Products) {
  const { id, image, title, price } = props;
  const [val, setVal] = useState(1);
  const [total, setTotal] = useState(0);
  console.log({ total });
  const arr = [] as any;
  console.log(arr);
  return (
    <>
      <div className='cart'>
        <div>
          <img src={image} alt='pic' />
          <div>
            <button onClick={() => (val < 1 ? 1 : setVal(val - 1))}>-</button>
            <input value={val} />
            <button onClick={() => setVal(val + 1)}>+</button>
          </div>
        </div>

        <div className='cart_details'>
          <h4>{title}</h4>
          <h4 className='cart_price'>
            ${price} * {val}
            <span className='cart_arrow'>
              <ArrowForwardIcon fontSize='small' />
            </span>
            {Math.round(price * val)}
          </h4>
        </div>
      </div>
    </>
  );
}
