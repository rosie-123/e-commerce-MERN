import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import Landing from './Landing'
import ShoppingCart from "./ShoppingCart";
import Footer from "./Footer"

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
          <Route path="/cart" component={ShoppingCart}></Route>
          <Route path="/clothes" component={Landing}></Route>
          <Route path="/ja" component={Landing}></Route>
          <Route path="/men" component={Landing}></Route>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default connect(null, actions)(App);