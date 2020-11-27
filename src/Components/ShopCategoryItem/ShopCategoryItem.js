import React from "react";
import "./ShopCategoryItem.css";
import { connect } from "react-redux";
import { selectCollectionCategory } from "../../Redux/Shop/ShopSelector";
import ItemComponent from "../ItemComponent/ItemComponent";

const ShopCategoryItem = ({ collections }) => {
  const { items } = collections;
  return (
    <div className="shopCategoryItem">
      {items.map((item) => (
        <ItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collections: selectCollectionCategory(ownProps.match.params.collectionId)(
    state
  ),
});
export default connect(mapStateToProps)(ShopCategoryItem);
