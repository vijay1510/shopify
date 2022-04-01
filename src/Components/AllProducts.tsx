import React, { useEffect } from "react";
import { getAllProducts } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import { InitialState } from "../Redux/Reducer";
import Product from "./Product";

function AllProducts() {
  const products = useSelector((state: InitialState) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      <div className='allproducts'>
        {products.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </>
  );
}

export default AllProducts;
