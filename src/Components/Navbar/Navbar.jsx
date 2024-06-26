import "./Navbar.css";
import logo from "../../Assets/task-logo.png";
import homeBtn from "../../Assets/home-btn.svg";
import boxesBtn from "../../Assets/boxes-btn.svg";
import battlesBtn from "../../Assets/battles-btn.svg";
import vipBtn from "../../Assets/VIP.svg";
import affiBtn from "../../Assets/affiliates.svg";
import usFlag from "../../Assets/US-flag.png";
import coin from "../../Assets/coin.svg";
import chatBtn from "../../Assets/chat.svg";
import threeDots from "../../Assets/three-dots.svg";
import CustomDropdown from "../CustomDropdown/CustomDropdown";

const Navbar = () => {
  const languages = [
    { code: "EN", name: "English", flag: usFlag },
    { code: "FR", name: "French", flag: usFlag },
    { code: "ES", name: "Spanish", flag: usFlag },
    { code: "DE", name: "German", flag: usFlag },
  ];

  const currency = [
    { code: "USD", name: "USA", flag: coin },
    { code: "INR", name: "India", flag: coin },
    { code: "ES", name: "US", flag: coin },
    { code: "DE", name: "India", flag: coin },
  ];
  return (
    <div className="navbar">
      <div className="left-nav">
        <div className="nav-logo">
          <img className="nav-logo-image" src={logo} alt="Logo" />
          <div className="nav-logo-text desktop">DROPHEAT</div>
        </div>
        <div className="left-nav-links desktop">
          <div className="left-nav-home-container left-nav-btns">
            <img src={homeBtn} alt="Logo" />
            <div>Home</div>
          </div>
          <div className="left-nav-boxes-container left-nav-btns">
            <img src={boxesBtn} alt="Logo" />
            <div>Boxes</div>
          </div>
          <div className="left-nav-battles-container left-nav-btns">
            <img src={battlesBtn} alt="Logo" />
            <div>Battles</div>
          </div>
          <div className="left-nav-vip-container left-nav-btns">
            <img src={vipBtn} alt="Logo" />
            <div>VIP members</div>
          </div>
          <div className="left-nav-affilates-container left-nav-btns">
            <img src={affiBtn} alt="Logo" />
            <div>Affiliates</div>
          </div>
        </div>
      </div>
      <div className="right-nav">
        <div className="language-dropdown-container">
          <CustomDropdown data={languages} />
        </div>
        <div className="currency-dropdown-container desktop">
          <CustomDropdown data={currency} />
        </div>
        <div className="authorization-btn-container">Authorization</div>
        <div className="chat-btn-container">
          <img className="chat-image" src={chatBtn} alt="Chat button" />
        </div>
        <div className="more-options-btn-container mobile">
          <img className="options-image" src={threeDots} alt="more button" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
