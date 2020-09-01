import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import Landing from './Landing'
import ShoppingCart from "./ShoppingCart";
const Orders = () => <h2>Orders</h2>;

const App = (props) => {
  useEffect(() => {
    props.fetchUser();
    props.fetchProducts();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/orders" component={Orders}></Route>
          <Route path="/cart" component={ShoppingCart}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default connect(null, actions)(App);
