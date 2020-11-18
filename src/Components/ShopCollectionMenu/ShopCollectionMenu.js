import React from "react";
import "./ShopCollectionMenu.css";

const ShopCollectionMenu = ({ collection, handleClick }) => {
  const { title, imageUrl } = collection;
  return (
    <div className="shopCollectionMenu" onClick={handleClick}>
      <div className="menuTitle"> {title} </div>
      <img alt="menu-image" src={imageUrl} />
    </div>
  );
};

export default ShopCollectionMenu;
