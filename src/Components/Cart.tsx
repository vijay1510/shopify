import React, { useState, useEffect } from "react";
import { Products } from "../Redux/Action";
import { getTotal } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Cart(props: Products) {
  const { id, image, title, price } = props;
  const [val, setVal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal(id, val));
  }, [dispatch, val, id]);

  return (
    <>
      <div className='cart'>
        <div>
          <img src={image} alt='pic' />
          <div>
            <button onClick={() => (val === 0 ? 0 : setVal(val - 1))}>-</button>
            <input value={val} />
            <button onClick={() => setVal(val + 1)}>+</button>
          </div>
        </div>

        <div className='cart_details'>
          <h4>{title}</h4>
          <h4 className='cart_price'>
            ${price} * {val}
            <span className='cart_arrow'>
              <ArrowForwardIcon fontSize='large' />
            </span>
            {Math.round(price * val)}
          </h4>
        </div>
      </div>
    </>
  );
}
