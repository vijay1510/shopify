import React from "react";
import { Link } from "react-router-dom";
import { Products } from "../Redux/Action";

import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";

export default function Product(props: Products) {
  const { id, image, title, price, category } = props;
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
              style={{ color: "blue" }}
              onClick={() => alert(id)}
            />
          </span>
        </p>
      </div>
    </>
  );
}
