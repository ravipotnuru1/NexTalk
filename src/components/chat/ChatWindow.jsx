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
      <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 px-6 transition-colors duration-300">
        <div className="max-w-md text-center">

          <h2 className="mb-4 text-4xl lg:text-3xl font-bold text-gray-800 dark:text-white">
            Welcome to NexTalk
          </h2>

          <p className="text-lg lg:text-base text-gray-500 dark:text-gray-400">
            Select a conversation to start chatting with your friends and colleagues.
          </p>

        </div>
      </div>
    );
  }

  const chatMessages =
    messages[selectedChat.id] || [];

  return (
    <div className="flex h-full flex-col bg-gray-100 dark:bg-slate-900 transition-colors duration-300">

      <ChatHeader
        onMenuClick={onMenuClick}
      />

      <div
        className="
          flex-1
          overflow-y-auto
          px-4
          py-5
          sm:px-5
          sm:py-5
          lg:px-6
          lg:py-6
        "
      >
        <div className="flex w-full flex-col">

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