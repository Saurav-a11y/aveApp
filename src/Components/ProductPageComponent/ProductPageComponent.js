import React from "react";
import TopBanner from "../../Components/TopBannnerComponent/TopBanner";
import SingleProductCompoent from "../../Components/SingleProductComponent/SingleProductCompoent";
import { connect } from "react-redux";

const ProductPageComponent = ({ ...props }) => {
  return (
    <div className="single-page">
      <TopBanner
        imgSrc="../../assets/topBanner2.png"
        className="overlay"
        overlayTitle="product view"
        overlaypara="mens - casuals - hoodies & sweatshirts - ave classic sweatshirt"
      />
      {/* <SingleProductCompoent /> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  collection: state.shop.shopCollections,
});
export default connect(mapStateToProps)(ProductPageComponent);
