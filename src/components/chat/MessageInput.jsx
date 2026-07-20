import { useState } from "react";
import { FiSend } from "react-icons/fi";

import useChat from "../../hooks/useChat";
import EmojiPicker from "./EmojiPicker";
import AttachmentButton from "./AttachmentButton";
import VoiceButton from "./VoiceButton";

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
    <div className="border-t border-gray-200 bg-white px-3 py-3 sm:px-6 sm:py-4">
      <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 shadow-sm">

        <EmojiPicker onSelect={handleEmoji} />

        <AttachmentButton onFileSelect={handleAttachment} />

        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="
            flex-1
            bg-transparent
            px-2
            py-3
            text-sm
            outline-none
            placeholder:text-gray-400
          "
        />

        <VoiceButton onClick={handleVoice} />

        <button
          type="button"
          onClick={handleSend}
          disabled={!text.trim()}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-blue-600
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:bg-blue-700
            disabled:cursor-not-allowed
            disabled:bg-gray-300
            disabled:hover:scale-100
          "
        >
          <FiSend size={18} />
        </button>

      </div>
    </div>
  );
}

export default MessageInput;