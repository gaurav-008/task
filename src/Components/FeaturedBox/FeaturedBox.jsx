import React from "react";
import "./FeaturedBox.css";

const FeaturedBox = (props) => {
  return (
    <div className="featured-box">
      <div className="tags">
        {props.tags.map((item, index) => {
          let buttonClass = "";
          if (item === "New") {
            buttonClass = "tag-button new";
          } else if (item === "Hot") {
            buttonClass = "tag-button hot";
          } else {
            buttonClass = "tag-button default";
          }
          return (
            <button key={index} className={buttonClass}>
              {item}
            </button>
          );
        })}
      </div>
      <div className="image-container">
        <img className="box-image" src={props.image} alt="" />
      </div>
      <div className="content-group">
        <p className="heading">{props.heading}</p>
        <div className="category">
          {props.category.map((item, index) => {
            return (
              <div key={index} className="category-card">
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="price">${props.price}</div>
      <div className="action-button">
        <button className="open">{props.openButtonText}</button>
        <button className="info">Info</button>
      </div>
    </div>
  );
};

export default FeaturedBox;
