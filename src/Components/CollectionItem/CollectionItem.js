import React from "react";
import "./CollectionItems.css";
import ItemComponent from "../ItemComponent/ItemComponent";

const CollectionItem = ({ items, category }) => {
  return (
    <div className="collection-item ">
      {items
        .filter((item, idx) => idx < 3)
        .map((item) => (
          <ItemComponent key={item.id} item={item} category={category} />
        ))}
    </div>
  );
};

export default CollectionItem;
