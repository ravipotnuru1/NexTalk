import { FaCheck, FaCheckDouble } from "react-icons/fa";
import "./MessageBubble.css";

function MessageBubble({ message }) {
  const isMe = message.sender === "me";

  return (
    <div className={`message-row ${isMe ? "sent-row" : "received-row"}`}>
      <div className={`message-bubble ${isMe ? "sent" : "received"}`}>
        <p className="message-text">
          {message.text}
        </p>

        <div
          className={`message-info ${
            isMe ? "sent-info" : "received-info"
          }`}
        >
          <span className="message-time">
            {message.time}
          </span>

          {isMe &&
            (message.read ? (
              <FaCheckDouble className="read-icon" />
            ) : (
              <FaCheck className="sent-icon" />
            ))}
        </div>
      </div>
    </div>
  );
}

export default MessageBubble;