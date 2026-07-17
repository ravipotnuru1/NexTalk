import api from "./axios";

const chatService = {
  // Get all conversations
  async getChats() {
    const response = await api.get("/users");
    return response.data;
  },

  // Get messages for a chat
  async getMessages(chatId) {
    const response = await api.get(`/posts?userId=${chatId}`);
    return response.data;
  },

  // Send a message (Mock)
  async sendMessage(messageData) {
    const response = await api.post("/posts", messageData);
    return response.data;
  },

  // Get contacts
  async getContacts() {
    const response = await api.get("/users");
    return response.data;
  },

  // Get user profile
  async getProfile(userId) {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  },
};

export default chatService;