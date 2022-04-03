import React from "react";
import Login from "../Auth/Login";
import PlaceOrder from "./PlaceOrder";
import { useSelector } from "react-redux";
import { InitialState } from "../Redux/Reducer";

export default function Secret() {
  const user = useSelector((state: InitialState) => state.user);
  return <>{user ? <PlaceOrder /> : <Login />}</>;
}
