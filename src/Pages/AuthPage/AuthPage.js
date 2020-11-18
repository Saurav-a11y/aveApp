import React from "react";
import "./Auth.css";
import SignupComponent from "../../Components/SignupComponent/SignupComponent";
import SignInComponent from "../../Components/SinginComponent/SignInComponent";
import TopBanner from "../../Components/TopBannnerComponent/TopBanner";
import imgContainer from "../../img/topBanner2.png";
export const AuthPage = () => {
  return (
    <div className="single-page">
      <TopBanner
        imgSrc={imgContainer}
        className="overlay"
        overlayTitle="Welcome to Ave"
        overlaypara="SignIn or Register"
      />
      <div className="authComponent">
        <SignInComponent />
        <SignupComponent />
      </div>
    </div>
  );
};
