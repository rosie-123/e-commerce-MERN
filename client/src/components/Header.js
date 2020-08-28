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
          <a href="/auth/google">LOG IN</a>
        </div>
      ) : props.auth === null ? (
        <div></div>
      ) : (
        <div className="header__user">
          <a href="/cart">
            <span>CART</span>
          </a>
          <a href="/api/logout">LOG OUT</a>
        </div>
      )}
    </div>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
