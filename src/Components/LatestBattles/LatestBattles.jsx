import Row from "../Row/Row";
import f from "../../Assets/F.svg";
import "./LatestBattles.css";

const LatestBattles = () => {
  return (
    <div className="latest-battle-container">
      <div>
        <img src={f} />
        <div className="section-heading">
          <span>Latest Battles</span>
        </div>
        <div className="section-button">View All</div>
      </div>
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  );
};

export default LatestBattles;
