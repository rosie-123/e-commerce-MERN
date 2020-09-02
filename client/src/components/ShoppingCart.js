import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { REMOVE_FROM_CART } from "../actions/types";

import "./ShoppingCart.css";

const ShoppingCart = ({ cart, dispatch }) => {
  return (
    <div id="cart_container">
      <div id="product_container">
        <h3 className="subtitle">Shopping Bag</h3>
        {Object.keys(cart.productsInCart).length === 0 ? (
          <div>
            <p>You shopping bag is empty</p>
          </div>
        ) : (
          <div id="item_container">
            {Object.keys(cart.productsInCart).map((productInCartId) =>
              cart.products.map((product) => (
                <>
                  {product._id === productInCartId ? (
                    <>
                      <div className="single_product">
                        <img
                          className="product_image"
                          src={product.image}
                          alt=""
                        ></img>
                        <div className="text_desc">
                          <p className="">{product.brand}</p>
                          <p>{product.title}</p>
                          <small>{product.description}</small>
                          <p className="white_space"></p>
                          <small>$ {product.price}</small>
                          <p>
                            <small>
                              Quantity: {cart.productsInCart[productInCartId]}
                            </small>
                          </p>
                        </div>
                        <div className="white_space"></div>
                        <div className="btn_container">
                          <Button
                            mt={0}
                            className="removeBtn"
                            color="secondary"
                            size="small"
                            onClick={() =>
                              dispatch({
                                type: REMOVE_FROM_CART,
                                productInCartId,
                              })
                            }
                          >
                            REMOVE
                          </Button>
                        </div>
                      </div>
                      <Divider />
                    </>
                  ) : (
                    <div></div>
                  )}
                </>
              ))
            )}
          </div>
        )}
        <div id="total">
          <div className="total_line">
            <p>Total</p>
            <p>${cart.price} USD</p>
          </div>
          <div className="total_line">
            <p>Shipping</p>
            <p>FREE</p>
          </div>
        </div>
      </div>
      <div id="payment">
        <h3 className="subtitle">Checkout</h3>
        <Button variant="outlined" size="small">
          PROCEED TO CHECKOUT
        </Button>
      </div>
    </div>
  );
};

function mapStateToProps({ cart, dispatch }) {
  return { cart, dispatch };
}
export default connect(mapStateToProps)(ShoppingCart);
