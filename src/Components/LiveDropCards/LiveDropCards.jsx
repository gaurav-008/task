import React from "react";
import "./LiveDropCards.css";
const LiveDropCards = (props) => {
  const lineColorStyle = {
    background: `${props.lineColor}`,
  };
  const gradColor = props.lineColor+88
  
  return (
    <div className="liveDropCards-container" style={{ "--lineColor": props.lineColor, "--gradientColor":gradColor}}>
      <div className="line" style={lineColorStyle}></div>
      <div className="content">
        <img src={props.image} alt="" />
        <div className="content-right">
          <span className="price">${props.price}</span>
          <div className="content-right-bottom">
            <img className="avatar" src={props.avatar} alt="" />
            <span>{props.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDropCards;
