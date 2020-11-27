import React from "react";
import TopBanner from "../../Components/TopBannnerComponent/TopBanner";
import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview";
import ShopCollection from "../../Components/ShopCollection/ShopCollection";
import imgContainer from "../../img/container.png";

const HomePage = ({ ...props }) => {
  console.log(props);
  return (
    <React.Fragment>
      <TopBanner imgSrc={imgContainer} />
      <ShopCollection />

      <CollectionPreview />
    </React.Fragment>
  );
};

export default HomePage;
