import React from 'react'
import './TopBanner.css'
import CustomButton from '../CustomButton/CustomButton'
function TopBanner({imgSrc, className, overlayTitle, overlaypara}) {
    return (
        <div className="topBanner">
       
            <img alt="topBanner" className="img-responsive" src={imgSrc}  />
            <div className={className}>
                <div className="overlay-text"> 
                    <span className="overTitle"> {overlayTitle} </span>
                    <span className="overlaypara"> {overlaypara} </span>    
                 </div>
            </div>
            <div className="bannerText">
                <span> A </span>
                <span> V </span>
                <span> E </span>
            </div>
            <CustomButton> Shop Mens Collection </CustomButton>
        </div>
    )
}

export default TopBanner
