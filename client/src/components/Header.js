import React from "react";
import { connect } from "react-redux";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
const Header = (props) => {
  return (
    <div className="header">
      <div className="header__brand">
        <a href="/">
          <h5>NONAME STORE</h5>
        </a>
      </div>
      <div className="header__search">
        <input></input>
        <SearchIcon />
      </div>
      {props.auth === false ? (
        <div className="header__user">
          <span>
            LOGIN WITH{" "}
            <a className="clickable__link" href="/auth/google">
              GOOGLE
            </a>{" "}
            /{" "}
            <a className="clickable__link" href="/auth/facebook">
              FACEBOOK
            </a>
          </span>
        </div>
      ) : props.auth === null ? (
        <div></div>
      ) : (
        <div className="header__user">
          <a href="/cart">
            <span>CART</span>
          </a>
          <a href="/auth/logout">LOG OUT</a>
        </div>
      )}
    </div>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
