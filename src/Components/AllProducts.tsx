import React, { useEffect } from "react";
import Category from "./Category";
import { getAllProducts } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import { InitialState } from "../Redux/Reducer";
import Product from "./Product";

function AllProducts() {
  const products = useSelector((state: InitialState) => state.products);
  const filtered = useSelector((state: InitialState) => state.filtered);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      <div className='allproducts'>
        <Category />
      </div>
      {filtered && (
        <div className='allproducts_items'>
          {filtered.map((item) => {
            return <Product key={item.id} {...item} />;
          })}
        </div>
      )}
      <div className='allproducts_items'>
        {filtered.length === 0 &&
          products.map((item) => {
            return <Product key={item.id} {...item} />;
          })}
      </div>
    </>
  );
}

export default AllProducts;
