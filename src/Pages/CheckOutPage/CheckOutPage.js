import React from "react";
import CheckOutComponent from "../../Components/CheckOutComponent/CheckOutComponent";
import TopBanner from "../../Components/TopBannnerComponent/TopBanner";
import imgContainer from "../../img/topBanner2.png";

export const CheckOutPage = () => {
  return (
    <div className="single-page">
      <TopBanner
        imgSrc={imgContainer}
        className="overlay"
        overlayTitle="product view"
        overlaypara="mens - casuals - hoodies & sweatshirts - ave classic sweatshirt"
      />
      <CheckOutComponent />
    </div>
  );
};
