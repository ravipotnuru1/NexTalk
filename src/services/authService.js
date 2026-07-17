import api from "./axios";

const authService = {
  // Mock Login
  async login(credentials) {
    console.log("Login Request:", credentials);

    return {
      success: true,
      token: "mock-jwt-token",
      user: {
        id: 1,
        name: "Ravi",
        email: credentials.email,
      },
    };
  },

  // Mock Signup
  async signup(userData) {
    console.log("Signup Request:", userData);

    return {
      success: true,
      message: "Account created successfully.",
    };
  },

  // Mock Forgot Password
  async forgotPassword(email) {
    console.log("Forgot Password:", email);

    return {
      success: true,
      message: "Password reset link sent.",
    };
  },

  // Mock Logout
  async logout() {
    localStorage.removeItem("token");

    return {
      success: true,
    };
  },

  // Future Profile API
  async getProfile() {
    const response = await api.get("/users/1");
    return response.data;
  },
};

export default authService;