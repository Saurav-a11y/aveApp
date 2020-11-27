import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopPreview } from "../../Redux/Shop/ShopSelector";
import CollectionCategoryComponent from "../CollectionCategoryCompoenent/CollectionCategoryComponent";

const ShopCategory = ({ match, collections }) => {
  console.log("from shop catergory");
  console.log(collections);
  return (
    <div>
      {collections.map((collection) => (
        <CollectionCategoryComponent collection={collection} />
      ))}
    </div>
  );
};
const mapStateToprops = createStructuredSelector({
  collections: selectShopPreview,
});
export default connect(mapStateToprops)(ShopCategory);
