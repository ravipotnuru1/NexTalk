import {
  FiMenu,
  FiPhone,
  FiVideo,
  FiMoreVertical,
} from "react-icons/fi";

import useChat from "../../hooks/useChat";
import "./ChatHeader.css";

function ChatHeader({ onMenuClick }) {
  const { selectedChat } = useChat();

  if (!selectedChat) {
    return (
      <header className="chat-header-empty">
        <p className="chat-header-empty-text">
          Select a conversation
        </p>
      </header>
    );
  }

  return (
    <header className="chat-header">

      {/* Left */}
      <div className="chat-header-left">

        <button
          onClick={onMenuClick}
          className="chat-menu-btn"
        >
          <FiMenu size={22} />
        </button>

        <div className="chat-avatar-wrapper">

          <img
            src={selectedChat.avatar}
            alt={selectedChat.name}
            className="chat-avatar"
          />

          {selectedChat.online && (
            <span className="chat-online-dot"></span>
          )}

        </div>

        <div className="chat-user-details">

          <h2 className="chat-user-name">
            {selectedChat.name}
          </h2>

          <p
            className={`chat-user-status ${
              selectedChat.online ? "online" : "offline"
            }`}
          >
            {selectedChat.online
              ? "Online"
              : "Last seen recently"}
          </p>

        </div>

      </div>

      {/* Right */}
      <div className="chat-header-actions">

        <button className="chat-action-btn">
          <FiPhone className="chat-action-icon" size={20} />
        </button>

        <button className="chat-action-btn">
          <FiVideo className="chat-action-icon" size={20} />
        </button>

        <button className="chat-action-btn">
          <FiMoreVertical className="chat-action-icon" size={20} />
        </button>

      </div>

    </header>
  );
}

export default ChatHeader;