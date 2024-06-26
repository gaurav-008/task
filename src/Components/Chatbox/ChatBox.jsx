import chatIcon from "../../Assets/chat.svg";
import onlineCircle from "../../Assets/concentric-circle.svg";
import chevronRight from "../../Assets/chevron-right.svg";
import messageIcon from "../../Assets/Message-Sent.svg";
import profilePlaceholder from "../../Assets/profile-picture-placeholder.png";
import Message from "../Message/Message";
import "./ChatBox.css";
import { useState } from "react";

const ChatBox = () => {
  const [data, setData] = useState([
    {
      id: 1,
      profile: profilePlaceholder,
      name: "coolmate",
      time: "10:32",
      message: "Helo Frenzs, Chai peelo",
    },
    {
      id: 2,
      profile: profilePlaceholder,
      name: "coolmate",
      time: "10:32",
      message:
        "Please provide camera access through your browser or device settings. Click 'Allow' when prompted, or adjust settings accordingly",
    },
    {
      id: 3,
      profile: profilePlaceholder,
      name: "coolmate",
      time: "10:32",
      message: "Good luck everybody 🍀",
    },
    {
      id: 4,
      profile: profilePlaceholder,
      name: "coolmate",
      time: "10:32",
      message: "how you been mate? It's been a while",
    },
    {
      id: 5,
      profile: profilePlaceholder,
      name: "coolmate",
      time: "10:32",
      message: "errr how did i move to sports",
    },
    {
      id: 6,
      profile: profilePlaceholder,
      name: "coolmate",
      time: "10:32",
      message: "they moved the start times for fd back 30 min",
    },
    {
      id: 7,
      profile: profilePlaceholder,
      name: "coolmate",
      time: "10:32",
      message:
        "thought the mod had gone mad asking not to share casino bets lol",
    },
    {
      id: 8,
      profile: profilePlaceholder,
      name: "coolmate",
      time: "10:32",
      message: "its all time waiting and show now low 😒",
    },
    {
      id: 9,
      profile: profilePlaceholder,
      name: "coolmate",
      time: "10:32",
      message: "Helo Frenzs, Chai peelo",
    },
    {
      id: 10,
      profile: profilePlaceholder,
      name: "coolmate",
      time: "10:32",
      message: "Helo Frenzs, Chai peelo",
    },
    {
      id: 11,
      profile: profilePlaceholder,
      name: "coolmate",
      time: "10:32",
      message: "Helo Frenzs, Chai peelo",
    },
  ]);
  return (
    <div className="chatbox-container">
      <div className="chatbox-head">
        <div className="chatbox-title">
          <img
            className="chatbox-icon"
            src={chatIcon}
            alt="chat icon"
            width={24}
            height={24}
          />
          <div>Chat</div>
        </div>
        <div className="chatbox-info-container">
          <div className="chatbox-info centered">
            <img
              className="chatbox-online-indicator"
              src={onlineCircle}
              alt="circles"
            />
            <div>12,490</div>
          </div>
          <div className="chevron-btn-wrapper centered">
            <img
              className="chatbox-chevron-right"
              src={chevronRight}
              alt="chevron-right"
              width={10}
              height={10}
            />
          </div>
        </div>
      </div>
      <div className="chatbox-body">
        <div className="chatbox-message-list">
          {data.map((item) => (
            <Message key={item.id} data={item} />
          ))}
        </div>
      </div>
      <div className="chatbox-footer centered">
        <input
          className="chatbox-input"
          placeholder="Enter your message"
          type="text"
        />
        <div className="submit-btn-wrapper centered">
          <img src={messageIcon} alt="message icon" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};
export default ChatBox;
