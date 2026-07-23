import { useState } from "react";
import { FiSend } from "react-icons/fi";

import useChat from "../../hooks/useChat";
import EmojiPicker from "./EmojiPicker";
import AttachmentButton from "./AttachmentButton";
import VoiceButton from "./VoiceButton";

import "./MessageInput.css";

function MessageInput() {
  const { sendMessage, selectedChat } = useChat();

  const [text, setText] = useState("");

  if (!selectedChat) return null;

  const handleSend = () => {
    if (!text.trim()) return;

    sendMessage(text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleEmoji = (emoji) => {
    setText((prev) => prev + emoji);
  };

  const handleAttachment = (file) => {
    if (!file) return;

    setText((prev) => `${prev} 📎${file.name}`);
  };

  const handleVoice = () => {
    alert("🎤 Voice recording feature coming soon.");
  };

  return (
    <div className="message-input-wrapper">
      <div className="message-input-container">
        <EmojiPicker onSelect={handleEmoji} />

        <AttachmentButton onFileSelect={handleAttachment} />

        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="message-input-field"
        />

        <VoiceButton onClick={handleVoice} />

        <button
          type="button"
          onClick={handleSend}
          disabled={!text.trim()}
          className="message-send-btn"
        >
          <FiSend size={18} />
        </button>
      </div>
    </div>
  );
}

export default MessageInput;