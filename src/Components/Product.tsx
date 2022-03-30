import React from "react";
import { Products } from "../Redux/Action";
import Button from "@mui/material/Button";

export default function Product(props: Products) {
  const { id, image, title, price, category } = props;
  return (
    <>
      <div className='product'>
        <img className='product_img' src={image} alt='pic' />
        <h6>{title}</h6>
        <p>{category}</p>
        <p>
          ${price}
          <span>
            <Button variant='contained' disableElevation>
              Add To Cart
            </Button>
          </span>
        </p>
      </div>
    </>
  );
}
