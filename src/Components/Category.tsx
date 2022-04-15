import React from "react";
import { useDispatch } from "react-redux";

import { getFilter } from "../Redux/Action";

export default function Category() {
  // const filtered = useSelector((state: InitialState) => state.filtered);

  const dispatch = useDispatch();

  return (
    <>
      <div className='category'>
        <p onClick={(e) => dispatch(getFilter("e"))}>ALL</p>
        <p onClick={() => dispatch(getFilter("men"))}>Men</p>
        <p onClick={() => dispatch(getFilter("women"))}>Women</p>
        <p onClick={() => dispatch(getFilter("electronics"))}>Electronics</p>
        <p onClick={() => dispatch(getFilter("jewelery"))}>Jewelery</p>
      </div>
    </>
  );
}
