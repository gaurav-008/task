import React from "react";
import xbox from "../../Assets/xbox.svg";
import hd from "../../Assets/hd.svg"
import drum from "../../Assets/drum.svg"
import glasses from "../../Assets/glasses.svg"
import LiveDropCards from "../LiveDropCards/LiveDropCards";
import avatar from "../../Assets/avatar.svg";
import group from "../../Assets/Group.svg";
import "./Livedrop.css";
import { v4 as uuidv4 } from "uuid";
const Livedrop = () => {
  const data = [
    {
      image: xbox,
      price: "10.00",
      name: "MsGreedy",
      avatar: avatar,
      lineColor: "#39ff88",
    },
    {
      image: hd,
      price: "10.00",
      name: "MsGreedy",
      avatar: avatar,
      lineColor: "#FF39DF",
    },
    {
      image: drum,
      price: "10.00",
      name: "MsGreedy",
      avatar: avatar,
      lineColor: "#3FA1FC",
    },
    {
      image: glasses,
      price: "10.00",
      name: "MsGreedy",
      avatar: avatar,
      lineColor: "#7D7D7D",
    }, 
    {
      image: xbox,
      price: "10.00",
      name: "MsGreedy",
      avatar: avatar,
      lineColor: "#FF39DF",
    },
    {
      image: xbox,
      price: "10.00",
      name: "MsGreedy",
      avatar: avatar,
      lineColor: "#3FA1FC",
    },
    {
      image: xbox,
      price: "10.00",
      name: "MsGreedy",
      avatar: avatar,
      lineColor: "#7D7D7D",
    },
    {
      image: xbox,
      price: "10.00",
      name: "MsGreedy",
      avatar: avatar,
      lineColor: "#7D7D7D",
    },
    {
      image: xbox,
      price: "10.00",
      name: "MsGreedy",
      avatar: avatar,
      lineColor: "#7D7D7D",
    },
    {
      image: xbox,
      price: "10.00",
      name: "MsGreedy",
      avatar: avatar,
      lineColor: "#39ff88",
    },
    {
      image: xbox,
      price: "10.00",
      name: "MsGreedy",
      avatar: avatar,
      lineColor: "#39ff88",
    },
    {
      image: xbox,
      price: "10.00",
      name: "MsGreedy",
      avatar: avatar,
      lineColor: "#39ff88",
    },
    {
      image: xbox,
      price: "10.00",
      name: "MsGreedy",
      avatar: avatar,
      lineColor: "#39ff88",
    },
  ];
  return (
    <div className="livedrop-container">
      <div className="livedrop-heading">
        <img src={group} alt="" />
        <span>Live drops</span>
      </div>
      <div className="live-drop">
        {data.map((item) => {
          return (
            <LiveDropCards
              key={uuidv4()}
              image={item.image}
              name={item.name}
              price={item.price}
              avatar={item.avatar}
              lineColor={item.lineColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Livedrop;
