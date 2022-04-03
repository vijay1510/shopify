import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Products, addToCart } from "../Redux/Action";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import { InitialState } from "../Redux/Reducer";

export default function Product(props: Products) {
  const { id, image, title, price, category } = props;
  const cart = useSelector((state: InitialState) => state.cart) as Products[];
  console.log({ cart });
  const colour = cart && cart.find((e) => e.id === id);
  const dispatch = useDispatch();
  return (
    <>
      <div className='product'>
        <Link to={`/singleproduct/${id}`}>
          <img className='product_img' src={image} alt='pic' />
        </Link>
        <h6>{title}</h6>

        <p>{category}</p>

        <p className='product_price'>
          ${price}
          <span className='product_cart'>
            <AddShoppingCartSharpIcon
              style={{ color: colour ? "red" : "blue" }}
              onClick={() => dispatch(addToCart(props))}
              fontSize='large'
            />
          </span>
        </p>
      </div>
    </>
  );
}
