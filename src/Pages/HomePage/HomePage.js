import React, { Component } from "react";
import TopBanner from "../../Components/TopBannnerComponent/TopBanner";
import { connect } from "react-redux";
import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview";
import ShopCollection from "../../Components/ShopCollection/ShopCollection";
import imgContainer from "../../img/container.png";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <TopBanner imgSrc={imgContainer} />
        <ShopCollection />

        <CollectionPreview />
      </React.Fragment>
    );
  }
}

export default HomePage;
