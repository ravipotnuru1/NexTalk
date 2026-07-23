import { FaCheckDouble, FaVolumeMute } from "react-icons/fa";
import "./ConversationItem.css";

function ConversationItem({
  chat,
  active,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`conversation-item ${
        active ? "conversation-active" : ""
      }`}
    >
      {/* Avatar */}

      <div className="conversation-avatar-wrapper">

        <img
          src={chat.avatar}
          alt={chat.name}
          className="conversation-avatar"
        />

        {chat.online && (
          <span className="conversation-online-dot"></span>
        )}

      </div>

      {/* Content */}

      <div className="conversation-content">

        <div className="conversation-top">

          <h3
            className={`conversation-name ${
              active ? "conversation-name-active" : ""
            }`}
          >
            {chat.name}
          </h3>

          <span
            className={`conversation-time ${
              chat.unread > 0
                ? "conversation-time-unread"
                : ""
            }`}
          >
            {chat.time}
          </span>

        </div>

        <div className="conversation-bottom">

          <div className="conversation-message">

            {chat.muted ? (
              <FaVolumeMute className="conversation-icon muted" />
            ) : (
              <FaCheckDouble className="conversation-icon seen" />
            )}

            <p className="conversation-last-message">
              {chat.lastMessage}
            </p>

          </div>

          {chat.unread > 0 && (
            <span className="conversation-unread">
              {chat.unread}
            </span>
          )}

        </div>

      </div>

    </button>
  );
}

export default ConversationItem;