import React from "react";
import star from "../../Assets/starx2.svg";
import ig2 from "../../Assets/ig2.svg";
import twitter2 from "../../Assets/twitter2.svg";
import tiktok2 from "../../Assets/tiktok2.svg";
import youtube2 from "../../Assets/youtube2.svg";

import "./Footer.css";

const Footer = () => {
  const listItems = [
    "AML Policy",
    "Cookie Policy",
    "Contact",
    "Terms Of Service",
    "Blog",
    "FAQ",
    "Provably Fair",
    "Privacy Statement",
  ];
  const socialIcons = [twitter2, ig2, tiktok2, youtube2];

  return (
    <div className="footer">
      <div className="footer-left">
        {Array.from({ length: 5 }).map((_, index) => (
          <img key={index} src={star} alt="Star" />
        ))}
      </div>
      <div className="footer-mid">
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="footer-right">
        {socialIcons.map((icon, index) => (
          <img key={index} src={icon} alt={`Social icon ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
