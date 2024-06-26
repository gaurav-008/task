import { useState } from "react";
import deliveryLogo from "../../Assets/delivery-logo.svg";
import profPic from "../../Assets/review-user-profile.png";
import Review from "../Review/Review";
import "./Deliveries.css";

const Deliveries = () => {
  const [reviewData, setReviewData] = useState([
    {
      id: 1,
      userProfileImage: profPic,
      userName: "Andr Grown",
      userHandle: "@users9384",
      postedTime: "3 hours ago",
      reviewTitle: "Best serivce I ever used",
      reviewBody:
        "It finally arrived. TY @HypeDrop Lemme know which case I should open to honor this moment.",
    },
    {
      id: 2,
      userProfileImage: profPic,
      userName: "Andr Grown",
      userHandle: "@users9384",
      postedTime: "3 hours ago",
      reviewTitle: "Best serivce I ever used",
      reviewBody:
        "It finally arrived. TY @HypeDrop Lemme know which case I should open to honor this moment.",
    },
    {
      id: 3,
      userProfileImage: profPic,
      userName: "Andr Grown",
      userHandle: "@users9384",
      postedTime: "3 hours ago",
      reviewTitle: "Best serivce I ever used",
      reviewBody:
        "It finally arrived. TY @HypeDrop Lemme know which case I should open to honor this moment.",
    },
    {
      id: 4,
      userProfileImage: profPic,
      userName: "Andr Grown",
      userHandle: "@users9384",
      postedTime: "3 hours ago",
      reviewTitle: "Best serivce I ever used",
      reviewBody:
        "It finally arrived. TY @HypeDrop Lemme know which case I should open to honor this moment.",
    },
  ]);
  return (
    <div className="delivery-container">
      <div className="delivery-head">
        <div className="delivery-title-container centered-delivery">
          <div className="delivery-logo">
            <img
              src={deliveryLogo}
              alt="deliveries logo"
              width={24}
              height={24}
            />
          </div>
          <div className="delivery-title">Fresh Deliveries</div>
        </div>
        <div className="delivery-head-info">
          Check out some of the hottest unboxings from our community! To appear
          on our page, tag us on Twitter when your item arrives.
        </div>
      </div>
      <div className="review-list">
        {reviewData.map((item) => (
          <Review key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
export default Deliveries;
