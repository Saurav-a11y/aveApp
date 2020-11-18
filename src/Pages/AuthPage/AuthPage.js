import React from "react";
import "./Auth.css";
import SignupComponent from "../../Components/SignupComponent/SignupComponent";
import SignInComponent from "../../Components/SinginComponent/SignInComponent";
import TopBanner from "../../Components/TopBannnerComponent/TopBanner";

export const AuthPage = () => {
  return (
    <div className="single-page">
      <TopBanner
        imgSrc="../../assets/topBanner2.png"
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
