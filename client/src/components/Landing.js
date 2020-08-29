import React from "react";
import { connect } from "react-redux";
import "./Landing.css";

const Landing = (props) => {
  return (
    <div className="landing">
      <div className="products__container">
        {props.cart.map((product, key) => (
          <div key={key} className="product__container">
            <img className="product__image" src={product.image}></img>
            <div className="product__text">
            <h5>{product.brand}</h5>
            <div>{product.title}</div>
        <div>$ {product.price} <small className="product__description">{product.description}</small></div>
            <small><a href="/">ADD TO CART</a></small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps)(Landing);
