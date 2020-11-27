import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../../img/logo.png";
import { userSignOut } from "../../Redux/User/UserAction";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../Redux/Cart/cartSelector";
import { selectCurrentUser } from "../../Redux/User/UserSelector";
import Burger from "./Burger";

const Header = ({ cartItems, currentUser, userSignOut }) => {
  return (
    <div className="header">
      <Link to="/">
        <img alt="logo" className="logo" src={logo} />
      </Link>

      <Burger
        cartItems={cartItems}
        currentUser={currentUser}
        userSignOut={userSignOut}
      />
    </div>
  );
};

const mapsStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  currentUser: selectCurrentUser,
});

export default connect(mapsStateToProps, { userSignOut })(Header);
