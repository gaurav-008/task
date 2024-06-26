import React from "react";
import FeaturedBox from "../FeaturedBox/FeaturedBox";
import featured1 from "../../Assets/featured1.svg";
import "./FeaturedBoxContainer.css";
import treasure from "../../Assets/treasure-chest.svg";
import Tabs from "../Tab/Tab";
const FeaturedBoxContainer = () => {
  return (
    <>
      <div className="featured-header">
        <div className="featured-header-left">
          <img className="treasure" src={treasure} alt="" />
          <span>Featured Boxes</span>
        </div>
        <div className="featured-header-mid">
          <Tabs />
        </div>
        <div className="featured-header-right">
          <div className="dropdown-container">
            <label htmlFor="sort-by" className="dropdown-label">
              Sort By:
            </label>
            <select id="sort-by" className="dropdown-select">
              <option value="">Price</option>
              <option value="">Newest</option>
              <option value="">Rating</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
      </div>
      <div className="featured-container">
        <FeaturedBox
          tags={["New", "Hot", "Popular"]}
          image={featured1}
          heading="Crazy Designers"
          category={["StreetWear", "Watches"]}
          price="390.00"
          openButtonText="Open case"
        />
        <FeaturedBox
          tags={["New", "Hot", "Popular"]}
          image={featured1}
          heading="Crazy Designers"
          category={["StreetWear", "Watches"]}
          price="390.00"
          openButtonText="Open case"
        />
        <FeaturedBox
          tags={["New", "Hot", "Popular"]}
          image={featured1}
          heading="Crazy Designers"
          category={["StreetWear", "Watches"]}
          price="390.00"
          openButtonText="Open case"
        />
        <FeaturedBox
          tags={["New", "Hot", "Popular"]}
          image={featured1}
          heading="Crazy Designers"
          category={["StreetWear", "Watches"]}
          price="390.00"
          openButtonText="Open case"
        />
        <FeaturedBox
          tags={["New", "Hot", "Popular"]}
          image={featured1}
          heading="Crazy Designers"
          category={["StreetWear", "Watches"]}
          price="390.00"
          openButtonText="Open case"
        />
        <FeaturedBox
          tags={["New", "Hot", "Popular"]}
          image={featured1}
          heading="Crazy Designers"
          category={["StreetWear", "Watches"]}
          price="390.00"
          openButtonText="Open case"
        />
        <FeaturedBox
          tags={["New", "Hot", "Popular"]}
          image={featured1}
          heading="Crazy Designers"
          category={["StreetWear", "Watches"]}
          price="390.00"
          openButtonText="Open case"
        />
        <FeaturedBox
          tags={["New", "Hot", "Popular"]}
          image={featured1}
          heading="Crazy Designers"
          category={["StreetWear", "Watches"]}
          price="390.00"
          openButtonText="Open case"
        />
        <FeaturedBox
          tags={["New", "Hot", "Popular"]}
          image={featured1}
          heading="Crazy Designers"
          category={["StreetWear", "Watches"]}
          price="390.00"
          openButtonText="Open case"
        />
        <FeaturedBox
          tags={["New", "Hot", "Popular"]}
          image={featured1}
          heading="Crazy Designers"
          category={["StreetWear", "Watches"]}
          price="390.00"
          openButtonText="Open case"
        />
      </div>
    </>
  );
};

export default FeaturedBoxContainer;
