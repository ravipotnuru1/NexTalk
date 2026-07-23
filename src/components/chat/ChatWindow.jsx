import { useEffect, useRef } from "react";

import useChat from "../../hooks/useChat";

import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import TypingIndicator from "./TypingIndicator";

import "./ChatWindow.css";

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
      <div className="chat-window-empty">

        <div className="chat-window-empty-content">

          <h2 className="chat-window-title">
            Welcome to NexTalk
          </h2>

          <p className="chat-window-subtitle">
            Select a conversation to start chatting with your friends and
            colleagues.
          </p>

        </div>

      </div>
    );
  }

  const chatMessages = messages[selectedChat.id] || [];

  return (
    <div className="chat-window">

      <ChatHeader onMenuClick={onMenuClick} />

      {/* Messages */}

      <div className="chat-window-messages">

        <div className="chat-window-container">

          {chatMessages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
            />
          ))}

          {typing && <TypingIndicator />}

          <div ref={messagesEndRef} />

        </div>

      </div>

      <MessageInput />

    </div>
  );
}

export default ChatWindow;