import { FiMenu, FiSearch } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

import useChat from "../../hooks/useChat";
import useAuth from "../../hooks/useAuth";
import ROUTES from "../../constants/routes";
import ConversationItem from "./ConversationItem";

import "./Sidebar.css";

function Sidebar({ mobileOpen, setMobileOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    filteredChats,
    selectedChat,
    setSelectedChat,
    searchTerm,
    setSearchTerm,
  } = useChat();

  const { user } = useAuth();

  const menuItems = [
    { name: "Chats", path: ROUTES.DASHBOARD },
    { name: "Contacts", path: ROUTES.CONTACTS },
    { name: "Profile", path: ROUTES.PROFILE },
    { name: "Settings", path: ROUTES.SETTINGS },
  ];

  return (
    <aside
      className={`sidebar ${
        mobileOpen ? "sidebar-open" : "sidebar-closed"
      }`}
    >
      {/* Header */}
      <div className="sidebar-header">

        <div className="sidebar-top">

          <div>

            <h1 className="sidebar-logo">
              NexTalk
            </h1>

            <p className="sidebar-tagline">
              Stay Connected
            </p>

          </div>

          <button
            onClick={() => setMobileOpen(false)}
            className="sidebar-menu-btn"
          >
            <FiMenu size={24} />
          </button>

        </div>

        {/* Search */}

        <div className="sidebar-search">

          <FiSearch
            size={20}
            className="sidebar-search-icon"
          />

          <input
            type="text"
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="sidebar-search-input"
          />

        </div>

        {/* Navigation */}

        <div className="sidebar-nav">

          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`sidebar-nav-btn ${
                location.pathname === item.path
                  ? "active"
                  : ""
              }`}
            >
              {item.name}
            </button>
          ))}

        </div>

      </div>

      {/* Conversations */}

      <div className="sidebar-conversations">
        {filteredChats.length === 0 ? (
          <div className="sidebar-empty">
            No conversations found.
          </div>
        ) : (
          filteredChats.map((chat) => (
            <ConversationItem
              key={chat.id}
              chat={chat}
              active={selectedChat?.id === chat.id}
              onClick={() => {
                setSelectedChat(chat);
                setMobileOpen(false);
              }}
            />
          ))
        )}
      </div>

      {/* Footer */}

      <div className="sidebar-footer">

        <div className="sidebar-user-card">

          <img
            src={user?.avatar || "https://i.pravatar.cc/150?img=12"}
            alt={user?.name || "User"}
            className="sidebar-user-avatar"
          />

          <div className="sidebar-user-info">

            <h3 className="sidebar-user-name">
              {user?.name || "Guest User"}
            </h3>

            <p className="sidebar-user-email">
              {user?.email || "guest@example.com"}
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;