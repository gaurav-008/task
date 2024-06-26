import reviewPic1 from "../../Assets/review-pic-1.png";
import reviewPic2 from "../../Assets/review-pic-2.png";
import reviewPic3 from "../../Assets/review-pic-3.png";
import reviewStar from "../../Assets/review-star.svg";
import "./Review.css";

const Review = ({ data }) => {
  return (
    <div className="review-container">
      <div className="review-head">
        <div className="user-info">
          <div className="user-profile">
            <img src={data.userProfileImage} alt="" width={48} height={48} />
          </div>
          <div className="user">
            <div className="user-name">{data.userName}</div>
            <div className="user-handle">{data.userHandle}</div>
          </div>
        </div>
        <div className="posted-time">{data.postedTime}</div>
      </div>
      <div className="review-body">
        <div className="review-body-title">{data.reviewTitle}</div>
        <div className="review-message">{data.reviewBody}</div>
        <div className="review-image-container">
          <img src={reviewPic1} alt="" />
          <img src={reviewPic2} alt="" />
          <img src={reviewPic3} alt="" />
        </div>
      </div>
      <div className="review-footer">
        <img src={reviewStar} alt="Star 1" width={26} height={26} />
        <img src={reviewStar} alt="Star 2" width={26} height={26} />
        <img src={reviewStar} alt="Star 3" width={26} height={26} />
        <img src={reviewStar} alt="Star 4" width={26} height={26} />
        <img src={reviewStar} alt="Star 5" width={26} height={26} />
      </div>
    </div>
  );
};
export default Review;
