import React from "react";
import { connect } from "react-redux";
import {
  finditem,
  selectCollectionSingleItem,
} from "../../Redux/Shop/ShopSelector";
import SingleProductCompoent from "../SingleProductComponent/SingleProductCompoent";

const SingleItemComponent = ({ collection, location, match }) => {
  console.log(collection);
  console.log(match.params);
  return (
    <div>
      <span className="title"> singleItem</span>
      {/* {collection.map((singleItem, idx) => (
        <SingleProductCompoent key={idx} item={singleItem} />
      ))} */}
      <SingleProductCompoent item={collection} />
    </div>
  );
};
const mapStateToProps = (state, { match }) => ({
  collection: selectCollectionSingleItem(match.params.itemId)(state),
});
export default connect(mapStateToProps)(SingleItemComponent);
