import React from "react";
import { connect } from "react-redux";
import "./Landing.css";
import { ADD_TO_CART } from "../actions/types";

const Landing = ({ cart, dispatch }) => {

  return (
    <div className="landing">
      <div className="products__container">
        {cart.products.map((product, key) => (
          <div key={key} className="product__container">
            <img className="product__image" src={product.image} alt=""></img>
            <div className="product__text">
              <h5>{product.brand}</h5>
              <div>{product.title}</div>
              <div>
                $ {product.price}{" "}
                <small className="product__description">
                  {product.description}
                </small>
              </div>
              <small>
                <a  onClick={() => dispatch({ type: ADD_TO_CART, key })}>ADD TO CART</a>
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function mapStateToProps({ cart, dispatch }) {
  return { cart, dispatch };
}

export default connect(mapStateToProps)(Landing);
