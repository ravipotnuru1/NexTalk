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
    { name: "Chats", path: ROUTES.DASHBOARD },
    { name: "Contacts", path: ROUTES.CONTACTS },
    { name: "Profile", path: ROUTES.PROFILE },
    { name: "Settings", path: ROUTES.SETTINGS },
  ];

  return (
    <aside
      className={`
        fixed top-0 left-0 z-50 flex h-full w-[360px] max-w-full
        flex-col border-r border-gray-200 bg-white shadow-xl
        transition-all duration-300
        dark:border-slate-700 dark:bg-slate-900
        lg:relative lg:w-[340px]
        ${
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-5 py-5 dark:border-slate-700">
        <div>
          <h1 className="text-3xl font-bold text-blue-600 lg:text-2xl">
            NexTalk
          </h1>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Stay Connected
          </p>
        </div>

        <button
          onClick={() => setMobileOpen(false)}
          className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-slate-800 lg:hidden"
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Search */}
      <div className="border-b border-gray-200 p-4 dark:border-slate-700">
        <div className="relative">
          <FiSearch
  size={20}
  className="absolute left-5 top-1/2 -translate-y-1/2 z-10 text-gray-500 pointer-events-none"
/>

          <input
  type="text"
  placeholder="Search conversations..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  style={{ paddingLeft: "60px" }}
  className="
    w-full
    h-12
    rounded-full
    border
    border-gray-300
    bg-gray-100
    pr-4
    text-sm
    text-gray-800
    placeholder:text-gray-400
    outline-none
    transition
    focus:border-blue-500
    focus:bg-white
    dark:border-slate-700
    dark:bg-slate-800
    dark:text-white
    dark:focus:bg-slate-700
  "
/>
        </div>
      </div>
      {/* Navigation */}
      <div className="flex gap-2 overflow-x-auto border-b border-gray-200 px-4 py-3 dark:border-slate-700">
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
              transition-all
              ${
                location.pathname === item.path
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-slate-800 dark:text-gray-200 dark:hover:bg-slate-700"
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
          <div className="flex h-full items-center justify-center px-6 text-center text-gray-500 dark:text-gray-400">
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
      <div className="border-t border-gray-200 p-4 dark:border-slate-700">
        <div className="flex items-center gap-3 rounded-2xl bg-gray-50 p-3 transition-colors duration-300 dark:bg-slate-800">
          <img
            src={user?.avatar || "https://i.pravatar.cc/150?img=12"}
            alt={user?.name || "User"}
            className="h-14 w-14 rounded-full object-cover"
          />

          <div className="min-w-0 flex-1">
            <h3 className="truncate text-base font-semibold text-gray-800 dark:text-white">
              {user?.name || "Guest User"}
            </h3>

            <p className="truncate text-sm text-gray-500 dark:text-gray-400">
              {user?.email || "guest@example.com"}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;