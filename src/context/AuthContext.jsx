import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("nextalk-user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }

    setLoading(false);
  }, []);

  const login = (email, password) => {
    const loggedInUser = {
      id: 1,
      name: "John Carter",
      email,
      avatar: "https://i.pravatar.cc/150?img=12",
    };

    localStorage.setItem(
      "nextalk-user",
      JSON.stringify(loggedInUser)
    );

    setUser(loggedInUser);
    setIsAuthenticated(true);

    return true;
  };

  const signup = (name, email, password) => {
    const newUser = {
      id: Date.now(),
      name,
      email,
      avatar: "https://i.pravatar.cc/150?img=12",
    };

    localStorage.setItem(
      "nextalk-user",
      JSON.stringify(newUser)
    );

    setUser(newUser);
    setIsAuthenticated(true);

    return true;
  };

  const logout = () => {
    localStorage.removeItem("nextalk-user");
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}