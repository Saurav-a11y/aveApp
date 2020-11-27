import React from "react";
import { connect } from "react-redux";
import "./ShopCollection.css";
import { createStructuredSelector } from "reselect";
import { selectShopPreview } from "../../Redux/Shop/ShopSelector";
import ShopCollectionMenu from "../ShopCollectionMenu/ShopCollectionMenu";
import { withRouter } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const ShopCollection = ({ collections, history, match }) => {
  const carouselItem = collections.map((collection) => (
    <ShopCollectionMenu
      key={collection.id}
      collection={collection}
      handleClick={() => history.push(`/shop/${collection.category}`)}
    />
  ));
  console.log(collections);
  return (
    <div className="shopCollection">
      <div className="collection">
        <AliceCarousel
          mouseTracking
          items={carouselItem}
          infinite={false}
          autoPlay={false}
          animationDuration="500"
          disableDotsControls={true}
          disableButtonsControls={true}
        />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopPreview,
});

export default withRouter(connect(mapStateToProps, null)(ShopCollection));
