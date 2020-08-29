import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import Landing from './Landing'
const Dashboard = () => <h2>Dashboard</h2>;
const Orders = () => <h2>Orders</h2>;
const newOrder = () => <h2>New Order</h2>;

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
          <Route path="/orders/new" component={newOrder}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default connect(null, actions)(App);
