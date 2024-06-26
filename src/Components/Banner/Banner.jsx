import React from "react";
import "./Banner.css";
import bannerImage from "../../Assets/bannerImage.svg";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-left">
        <div className="banner-left-text">
          <h1>Sign Up today and claim your FREE box</h1>
          <p>
            Unlock YOUR Free Box Today! Each box is
            a treasure trove of excitement waiting to
            be discovered. Don't miss out – dive into
            the unknown with us!
          </p>
        </div>
        <button className="claim">Claim Now</button>
      </div>
      <div className="banner-right">
        <img src={bannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
