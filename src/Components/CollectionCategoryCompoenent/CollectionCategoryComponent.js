import React from "react";
import ItemComponent from "../ItemComponent/ItemComponent";

const CollectionCategoryComponent = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collectionCategoryComponent">
      <span className="title"> {title} </span>
      <div
        className={items.length > 3 ? "shopCategoryItem2" : "shopCategoryItem"}
      >
        {items.map((item) => (
          <ItemComponent item={item} />
        ))}
      </div>
    </div>
  );
};
export default CollectionCategoryComponent;
