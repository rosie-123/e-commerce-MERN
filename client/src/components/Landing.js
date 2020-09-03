import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./Landing.css";
import { ADD_TO_CART } from "../actions/types";
import Button from "@material-ui/core/Button";

const Landing = ({ cart, dispatch }) => {
  const [displayedItems, setDisplayedItems] = useState(cart.products);
  useEffect(() => {
    switch (window.location.pathname) {
      case "/clothes":
        setDisplayedItems(
          displayedItems.filter((item) => item.itemType === "clothes")
        );
        break;
      case "/ja":
        setDisplayedItems(
          displayedItems.filter((item) => item.itemType === "ja")
        );
        break;
      case "/men":
        setDisplayedItems(
          displayedItems.filter(item => item.itemType === "men")
        )
    }
  }, [window.location]);
  return (
    <div className="landing">
      <div className="products__container">
        {displayedItems.map((product, key) => (
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
                <Button onClick={() => dispatch({ type: ADD_TO_CART, key })}>
                  ADD TO CART
                </Button>
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
