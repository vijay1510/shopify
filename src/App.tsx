import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import ProductDetails from "./Components/ProductDetails";
import AllProducts from "./Components/AllProducts";
import AllCart from "./Components/AllCart";
import "./App.css";

function App() {
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
      </Switch>
    </div>
  );
}

export default App;
