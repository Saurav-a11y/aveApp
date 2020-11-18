import React from "react";
import "./CheckOutComponent.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../Redux/Cart/cartSelector";
import CheckOutItemComponent from "../CheckOutItemComponent/CheckOutItemComponent";

const CheckOutComponent = ({ cartItems }) => {
  console.log(cartItems);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product </span>
        </div>
        <div className="header-block">
          <span>Name</span>
        </div>
        <div className="header-block">
          <span>Color</span>
        </div>
        <div className="header-block">
          <span>Size</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
      </div>
      {cartItems.map((cartItems) => (
        <CheckOutItemComponent cartItems={cartItems} />
      ))}
      {/* <div className="total">
        <span>Total: ${cartTotal} </span>
      </div> */}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, null)(CheckOutComponent);
