import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import SingleProduct from "./Components/SingleProduct";
import AllProducts from "./Components/AllProducts";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <AllProducts />
        </Route>
        <Route path='/singleproduct'>
          <SingleProduct />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
