import React from "react";
import { Link } from "react-router-dom";
import CartIconComponent from "../CartIconComponent/CartIconComponent";
import SearchBoxComponent from "../SearchBoxComponent/SearchBoxComponent";

export const RightLink = ({ cartItems, currentUser, userSignOut, open }) => {
  console.log(currentUser);
  return (
    <div className="right-link">
      <div className={open ? "responsive" : "navLinks"}>
        <Link className="link" to="/">
          Home
        </Link>

        <Link className="link" to="/shop">
          Shop
        </Link>
        <Link className="link" to="/checkout">
          Checkout
        </Link>

        <Link className="link" to="/">
          Lock Book
        </Link>
        {currentUser ? (
          <div className="link" onClick={() => userSignOut()}>
            SignOut
          </div>
        ) : (
          <Link className="link" to="/auth">
            SignIn
          </Link>
        )}
        <SearchBoxComponent />
        <CartIconComponent cartItems={cartItems} />
      </div>
    </div>
  );
};
