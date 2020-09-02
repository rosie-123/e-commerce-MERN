import React from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';

import "./ShoppingCart.css";

const ShoppingCart = ({ cart }) => {
  return (
    <div id="cart_container">
      <div id="product_container">
        <h3>Shopping Bag</h3>
        { console.log(cart) }
      </div>
      <div id="payment">
          <h3 id="checkout_btn">Checkout</h3>
          <Button variant="outlined" size="small">PROCEED TO CHECKOUT</Button>
      </div>
    </div>
  );
};

function mapStateToProps({ cart, dispatch }) {
  return { cart, dispatch };
}
export default connect(mapStateToProps)(ShoppingCart);
