import React from "react";
import "./CheckOutItemComponent.css";

const CheckOutItemComponent = ({ cartItems }) => {
  console.log(cartItems);
  const {
    imageUrl,
    name,
    quantity,
    price,
    selectedColor,
    selectedSize,
  } = cartItems;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="name"> {name} </div>
      <div className="color">
        <div className="value"> {selectedColor} </div>
      </div>
      <div className="size">
        <div className="value"> {selectedSize} </div>
      </div>
      <div className="itemprice"> {price} </div>
    </div>
  );
};

export default CheckOutItemComponent;
