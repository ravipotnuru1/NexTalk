import { useChatContext } from "../context/ChatContext";

function useChat() {
  const {
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
  } = useChatContext();

  return {
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
}

export default useChat;