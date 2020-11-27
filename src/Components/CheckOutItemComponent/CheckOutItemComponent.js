import React from "react";
import "./CheckOutItemComponent.css";

const CheckOutItemComponent = ({ cartItems }) => {
  console.log(cartItems);
  const {
    imageUrl,
    name,
    price,
    selectedColor,
    selectedSize,
    quantity,
  } = cartItems;

  return (
    <React.Fragment>
      <td className="image-container">
        <img src={imageUrl} alt="item" />
      </td>
      <td className="name"> {name} </td>
      <td className="itemprice"> {price} </td>
      <td className="color">{selectedColor}</td>
      <td className="size">{selectedSize}</td>
      <td className="quantity"> {quantity} </td>
    </React.Fragment>
  );
};

export default CheckOutItemComponent;
