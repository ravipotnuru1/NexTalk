import { FiMenu, FiSearch } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

import useChat from "../../hooks/useChat";
import useAuth from "../../hooks/useAuth";
import ROUTES from "../../constants/routes";
import ConversationItem from "./ConversationItem";

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
    {
      name: "Chats",
      path: ROUTES.DASHBOARD,
    },
    {
      name: "Contacts",
      path: ROUTES.CONTACTS,
    },
    {
      name: "Profile",
      path: ROUTES.PROFILE,
    },
    {
      name: "Settings",
      path: ROUTES.SETTINGS,
    },
  ];

  return (
    <aside
      className={`
        fixed
        lg:static
        top-0
        left-0
        z-50
        h-full
        w-80
        bg-white
        border-r
        border-gray-200
        flex
        flex-col
        transition-transform
        duration-300
        ${
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
        <div>
          <h1 className="text-2xl font-bold text-blue-600">
            NexTalk
          </h1>

          <p className="text-sm text-gray-500">
            Stay Connected
          </p>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Search */}
      <div className="border-b border-gray-100 p-4">
        <div className="relative">
          <FiSearch
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="
              w-full
              rounded-full
              bg-gray-100
              py-3
              pl-11
              pr-4
              outline-none
              transition
              focus:bg-white
              focus:ring-2
              focus:ring-blue-500
            "
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-2 overflow-x-auto border-b border-gray-100 px-4 py-3">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`
              whitespace-nowrap
              rounded-full
              px-4
              py-2
              text-sm
              font-medium
              transition
              ${
                location.pathname === item.path
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }
            `}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto">
        {filteredChats.length === 0 ? (
          <div className="flex h-full items-center justify-center px-6 text-center text-gray-500">
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
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">

          <img
            src={
              user?.avatar ||
              "https://i.pravatar.cc/150?img=12"
            }
            alt={user?.name || "User"}
            className="h-12 w-12 rounded-full object-cover"
          />

          <div className="min-w-0 flex-1">
            <h3 className="truncate font-semibold text-gray-800">
              {user?.name || "Guest User"}
            </h3>

            <p className="truncate text-sm text-gray-500">
              {user?.email || "guest@example.com"}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;