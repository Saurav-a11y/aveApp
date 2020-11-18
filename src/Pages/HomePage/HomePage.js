import React, { Component } from "react";
import TopBanner from "../../Components/TopBannnerComponent/TopBanner";
import { connect } from "react-redux";
import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview";
import ShopCollection from "../../Components/ShopCollection/ShopCollection";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <TopBanner imgSrc="./img/container.png" />
        <ShopCollection />

        <CollectionPreview />
      </React.Fragment>
    );
  }
}

export default HomePage;
