import React from "react";
import { connect } from "react-redux";
import { selectCollectionSingleItem } from "../../Redux/Shop/ShopSelector";
import SingleProductCompoent from "../SingleProductComponent/SingleProductCompoent";

const SingleItemComponent = ({ collection, match }) => {
  console.log(collection);
  console.log(match.params);
  return (
    <div>
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
