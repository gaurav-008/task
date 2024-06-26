import React from "react";
import miniBannerImage from "../../Assets/bannerImage2.svg";
import "./MiniBanner.css";
const MiniBanner = () => {
  return (
    <div className="banner2">
      <div className="banner2-left">
        <div className="banner2-left-text">
          <h1>Earn up to 10% on deposits from your friends</h1>
          <p>Give your friends a 5% bonus added to all their cash deposits</p>
        </div>
        <button className="refer">Refer a friend</button>
      </div>
      <div className="banner2-right">
        <img src={miniBannerImage} alt="" />
      </div>
    </div>
  );
};

export default MiniBanner;
