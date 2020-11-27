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
      <table className="checkout-header">
        <thead>
          <tr>
            <th className="header-block">Product</th>
            <th className="header-block">Name</th>
            <th className="header-block">Price</th>
            <th className="header-block">Color</th>
            <th className="header-block">Size</th>
            <th className="header-block">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItems) => (
            <tr className="checkoutItem">
              <CheckOutItemComponent key={cartItems.id} cartItems={cartItems} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, null)(CheckOutComponent);
