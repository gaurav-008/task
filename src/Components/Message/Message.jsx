import "./Message.css";

const Message = ({ data }) => {
  return (
    <div className="message-container centered-message">
      <div className="profile-picture">
        <img src={data.profile} alt="Prof pic" width={38} height={38} />
      </div>
      <div className="message-info-container">
        <div className="message-info centered-message">
          <div className="message-name">{data.name}</div>
          <div className="message-time">{data.time}</div>
        </div>
        <div className="message-body">{data.message}</div>
      </div>
    </div>
  );
};

export default Message;
