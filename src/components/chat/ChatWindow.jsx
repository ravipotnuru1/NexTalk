import { useEffect, useRef } from "react";

import useChat from "../../hooks/useChat";

import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import TypingIndicator from "./TypingIndicator";

function ChatWindow({ onMenuClick }) {
  const {
    selectedChat,
    messages,
    typing,
  } = useChat();

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, selectedChat]);

  if (!selectedChat) {
    return (
      <div className="flex h-full items-center justify-center bg-gray-100">
        <div className="text-center">

          <h2 className="mb-3 text-3xl font-bold text-gray-700">
            Welcome to NexTalk
          </h2>

          <p className="text-gray-500">
            Select a conversation to start chatting.
          </p>

        </div>
      </div>
    );
  }

  const chatMessages =
    messages[selectedChat.id] || [];

  return (
    <div className="flex h-full flex-col bg-gray-100">

      <ChatHeader
        onMenuClick={onMenuClick}
      />

      <div className="flex-1 overflow-y-auto px-6 py-6">
        {chatMessages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
          />
        ))}

        {typing && <TypingIndicator />}

        <div ref={messagesEndRef} />
      </div>

      <MessageInput />
    </div>
  );
}

export default ChatWindow;