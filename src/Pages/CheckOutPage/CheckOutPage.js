import React from "react";
import CheckOutComponent from "../../Components/CheckOutComponent/CheckOutComponent";
import TopBanner from "../../Components/TopBannnerComponent/TopBanner";

export const CheckOutPage = () => {
  return (
    <div className="single-page">
      <TopBanner
        imgSrc="../../assets/topBanner2.png"
        className="overlay"
        overlayTitle="product view"
        overlaypara="mens - casuals - hoodies & sweatshirts - ave classic sweatshirt"
      />
      <CheckOutComponent />
    </div>
  );
};
