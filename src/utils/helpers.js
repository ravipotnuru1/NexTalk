// Format Time (24h -> 12h)
export const formatTime = (date) => {
  return new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Format Date
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString([], {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

// Get User Initials
export const getInitials = (name = "") => {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");
};

// Truncate Long Text
export const truncateText = (
  text = "",
  maxLength = 35
) => {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.substring(0, maxLength)}...`;
};

// Scroll to Bottom
export const scrollToBottom = (ref) => {
  ref?.current?.scrollIntoView({
    behavior: "smooth",
  });
};

// Generate Avatar URL
export const getAvatar = (id = 1) => {
  return `https://i.pravatar.cc/300?img=${id}`;
};

// Random ID Generator
export const generateId = () => {
  return Date.now() + Math.floor(Math.random() * 1000);
};

// Delay Utility
export const delay = (ms) => {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
};

// Capitalize First Letter
export const capitalize = (text = "") => {
  if (!text) return "";

  return text.charAt(0).toUpperCase() + text.slice(1);
};