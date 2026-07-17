const settings = [
  {
    id: 1,
    title: "Notifications",
    description: "Manage message and app notifications.",
    type: "toggle",
    key: "notifications",
    enabled: true,
  },
  {
    id: 2,
    title: "Privacy",
    description: "Control who can see your profile and activity.",
    type: "toggle",
    key: "privacy",
    enabled: true,
  },
  {
    id: 3,
    title: "Dark Mode",
    description: "Switch between light and dark theme.",
    type: "toggle",
    key: "darkMode",
    enabled: false,
  },
  {
    id: 4,
    title: "Language",
    description: "Choose your preferred language.",
    type: "select",
    key: "language",
    value: "English",
  },
  {
    id: 5,
    title: "Logout",
    description: "Sign out from your NexTalk account.",
    type: "action",
    key: "logout",
  },
];

export default settings;