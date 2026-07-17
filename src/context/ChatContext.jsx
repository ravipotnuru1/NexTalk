import { createContext, useContext, useMemo, useState } from "react";

import chatsData from "../data/chats";
import messagesData from "../data/messages";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [chats, setChats] = useState(chatsData);

  const [messages, setMessages] = useState(messagesData);

  const [selectedChat, setSelectedChat] = useState(
    chatsData.length ? chatsData[0] : null
  );

  const [searchTerm, setSearchTerm] = useState("");

  const [typing, setTyping] = useState(false);

  const filteredChats = useMemo(() => {
    return chats.filter((chat) =>
      chat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [chats, searchTerm]);

  const sendMessage = (text) => {
    if (!selectedChat || !text.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "me",
      text: text.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => ({
      ...prev,
      [selectedChat.id]: [
        ...(prev[selectedChat.id] || []),
        newMessage,
      ],
    }));

    setChats((prev) =>
      prev.map((chat) =>
        chat.id === selectedChat.id
          ? {
              ...chat,
              lastMessage: text,
              time: newMessage.time,
            }
          : chat
      )
    );
  };

  const value = {
    chats,
    setChats,

    filteredChats,

    messages,
    setMessages,

    selectedChat,
    setSelectedChat,

    searchTerm,
    setSearchTerm,

    typing,
    setTyping,

    sendMessage,
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  return useContext(ChatContext);
}