import React from "react";
import ItemComponent from "../ItemComponent/ItemComponent";

export const AnotherComponent = ({ item }) => {
  console.log(item);
  return (
    <div>
      {item.map((singleItem) => (
        <ItemComponent item={singleItem} />
      ))}
    </div>
  );
};
