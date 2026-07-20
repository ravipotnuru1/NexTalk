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
    <div className="border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-4 sm:px-6 sm:py-4 transition-colors duration-300">
      <div className="flex items-center gap-3 rounded-full border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-4 py-3 shadow-sm">

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
            text-base
            lg:text-sm
            text-gray-800
            dark:text-white
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
            h-12
            w-12
            lg:h-11
            lg:w-11
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
          <FiSend size={20} />
        </button>

      </div>
    </div>
  );
}

export default MessageInput;