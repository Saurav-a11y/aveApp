import React from "react";
import "./ShopCollectionMenu.css";

const ShopCollectionMenu = ({ collection, handleClick }) => {
  const { imageUrl } = collection;
  return (
    <div className="shopCollectionMenu" onClick={handleClick}>
      <img alt="menuimage" src={imageUrl} className="img-responsive" />
    </div>
  );
};

export default ShopCollectionMenu;
