import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { InitialState } from "../Redux/Reducer";
import { getFilter } from "../Redux/Action";

export default function Category() {
  const filtered = useSelector((state: InitialState) => state.filtered);
  const dispatch = useDispatch();
  return (
    <>
      <div className='category'>
        <p
          onClick={() => dispatch(getFilter("e"))}
          style={{ color: filtered.length === 20 ? "red" : "black" }}>
          ALL
        </p>
        <p
          onClick={() => dispatch(getFilter("men"))}
          style={{ color: filtered.length === 4 ? "red" : "black" }}>
          Men
        </p>
        <p
          onClick={() => dispatch(getFilter("women"))}
          style={{ color: filtered.length === 6 ? "red" : "black" }}>
          Women
        </p>
        <p
          onClick={() => dispatch(getFilter("electronics"))}
          style={{ color: filtered.length === 6 ? "red" : "black" }}>
          Electronics
        </p>
        <p
          onClick={() => dispatch(getFilter("jewelery"))}
          style={{ color: filtered.length === 4 ? "red" : "black" }}>
          Jewelary
        </p>
      </div>
    </>
  );
}
