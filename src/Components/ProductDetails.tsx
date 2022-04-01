import React, { useEffect } from "react";
import { singleproduct, Products, addToCart } from "../Redux/Action";
import { InitialState } from "../Redux/Reducer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import Rating from "@mui/material/Rating";

//types
type Param = {
  id: string;
};

export default function ProductDetails() {
  const { id } = useParams<Param>();
  const product = useSelector(
    (state: InitialState) => state.product
  ) as Products;
  const cart = useSelector((state: InitialState) => state.cart) as Products[];
  console.log({ cart });
  const colour = cart && cart.find((e) => e.id === Number(id));
  console.log(product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(singleproduct(Number(id)));
  }, [dispatch, id]);
  return (
    <>
      <div className='sproduct'>
        <div>
          <img className='sproduct_img' src={product?.image} alt='pic' />
          <div className='sproduct_button'>
            <Button
              onClick={() => dispatch(addToCart(product))}
              variant='contained'
              color={colour ? "error" : "warning"}
              startIcon={<AddShoppingCartIcon />}>
              ADD TO CART
            </Button>
            <Button
              variant='contained'
              color='success'
              startIcon={<FlashOnIcon />}>
              BUY NOW
            </Button>
          </div>
        </div>
        <div>
          <h2>{product?.title}</h2>
          <p>${product?.price}</p>
          <Rating
            name='half-rating-read'
            defaultValue={2.5}
            precision={product?.rating?.rate ? product.rating.rate : 3.5}
            readOnly
          />

          <p>{product?.description}</p>
        </div>
      </div>
    </>
  );
}