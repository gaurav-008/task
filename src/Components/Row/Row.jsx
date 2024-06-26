import "./Row.css";
import rec2 from "../../Assets/Rectangle13.svg";
import fence from "../../Assets/Vector.svg";
import box1 from "../../Assets/box1.svg";

const Row = () => {
  return (
    <div className="main">
      <div className="left">
        <div className="left-group">
          <img src={rec2} alt="" />
          <img src={rec2} alt="" />
        </div>
        <img
          src={fence}
          alt="Crossed Swords"
          className="crossed-swords"
        />
        <div className="right-group">
          <img src={rec2} alt="" />
          <img src={rec2} alt="" />
        </div>
      </div>
      <div className="mid">
        <img src={box1} alt="" />
        <img src={box1} alt="" />
        <img src={box1} alt="" />
        <img src={box1} alt="" />
        <img src={box1} alt="" />
        <img src={box1} alt="" />
        <img src={box1} alt="" />
        <img src={box1} alt="" />
      </div>
      <div className="right">
        <span>$390<span className="afterDecimal">.00</span></span>
        <div className="button">Open case</div>
      </div>
    </div>
  );
};

export default Row;
