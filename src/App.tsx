import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import ProductDetails from "./Components/ProductDetails";
import AllProducts from "./Components/AllProducts";
import AllCart from "./Components/AllCart";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Secret from "./Components/Secret";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "./Redux/Action";
import firebaseConfig from "./Config/FirebaseConfig";
import { InitialState } from "./Redux/Reducer";

import "./App.css";

function App() {
  initializeApp(firebaseConfig);
  const auth = getAuth();
  const user = useSelector((state: InitialState) => state.user);
  console.log("user from state", user);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(saveUser(user.refreshToken));
      } else {
        dispatch(saveUser(undefined));
      }
    });
  }, [auth, dispatch]);
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <AllProducts />
        </Route>
        <Route path='/singleproduct/:id'>
          <ProductDetails />
        </Route>
        <Route exact path='/allcart'>
          <AllCart />
        </Route>
        <Route exact path='/enter/login'>
          <Login />
        </Route>
      </Switch>
      <Route exact path='/enter/signup'>
        <Signup />
      </Route>
      <Route exact path='/secret'>
        <Secret />
      </Route>
    </div>
  );
}

export default App;
