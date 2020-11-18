import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchBoxComponent from "../SearchBoxComponent/SearchBoxComponent";
import CartIconComponent from "../CartIconComponent/CartIconComponent";
import { connect } from "react-redux";
import logo from "../../img/logo.png";

const Header = ({ cartItems }) => {
  return (
    <div className="header">
      <Link to="/">
        <img alt="logo" src={logo} />
      </Link>
      <div className="right-link">
        <div className="navLinks">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/shop">
            Womens
          </Link>
          <Link className="link" to="/checkout">
            Checkout
          </Link>
          <Link className="link" to="/auth">
            SignIn
          </Link>
          <Link className="link" to="/">
            Lock Book
          </Link>
        </div>
        <SearchBoxComponent />
        <CartIconComponent cartItems={cartItems} />
      </div>
    </div>
  );
};

const mapsStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapsStateToProps, null)(Header);
