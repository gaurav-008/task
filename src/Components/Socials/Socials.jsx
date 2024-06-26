import React from "react";
import { v4 as uuidv4 } from 'uuid';
import inst from "../../Assets/inst.svg";
import tiktok from "../../Assets/tiktok.svg";
import twitter from "../../Assets/twitter.svg";
import youtube from "../../Assets/youtube.svg";
import "./Socials.css";
const Socials = () => {
  const socialIcons = [twitter, inst, tiktok, youtube];
  return (
    <div className="socials">
      {socialIcons.map((item) => {
        return <img key={uuidv4()} src={item} alt="" />;
      })}
    </div>
  );
};

export default Socials;
