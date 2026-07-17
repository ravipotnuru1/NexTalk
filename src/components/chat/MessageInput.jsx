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
    <div className="border-t border-gray-200 bg-white px-6 py-4">
      <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 shadow-sm">

        <EmojiPicker onSelect={handleEmoji} />

        <AttachmentButton onFileSelect={handleAttachment} />

        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent px-2 py-3 text-sm outline-none"
        />

        <VoiceButton onClick={handleVoice} />

        <button
          type="button"
          onClick={handleSend}
          disabled={!text.trim()}
          className="rounded-full bg-blue-600 p-3 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          <FiSend size={20} />
        </button>

      </div>
    </div>
  );
}

export default MessageInput;