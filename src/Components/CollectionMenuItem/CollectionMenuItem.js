import React from "react";
import ItemComponent from "../ItemComponent/ItemComponent";
import "./CollectionMenuItem.css";

export const CollectionMenuItem = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collectionMenuItem">
      <ItemComponent item={collection} />
    </div>
  );
};
