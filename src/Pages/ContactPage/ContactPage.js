import React from "react";
import TopBanner from "../../Components/TopBannnerComponent/TopBanner";

export const ContactPage = () => {
  const submit = (values) => {
    // print the form values to the console
    console.log(values);
  };
  return (
    <div>
      <TopBanner
        imgSrc="../../assets/topBanner2.png"
        className="overlay"
        overlayTitle="product view"
        overlaypara="mens - casuals - hoodies & sweatshirts - ave classic sweatshirt"
      />
    </div>
  );
};
