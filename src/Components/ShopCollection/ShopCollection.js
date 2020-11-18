import React from "react";
import { connect } from "react-redux";
import "./ShopCollection.css";
import { createStructuredSelector } from "reselect";
import { selectShopPreview } from "../../Redux/Shop/ShopSelector";
import ShopCollectionMenu from "../ShopCollectionMenu/ShopCollectionMenu";
import { withRouter } from "react-router-dom";

const ShopCollection = ({ collections, history, match }) => {
  console.log(collections);
  return (
    <div className="shopCollection">
      <span className="title"> this is shop collection</span>
      <div className="collection">
        {collections.map((collection) => (
          <ShopCollectionMenu
            key={collection.id}
            collection={collection}
            handleClick={() => history.push(`/shop/${collection.category}`)}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopPreview,
});

export default withRouter(connect(mapStateToProps, null)(ShopCollection));
