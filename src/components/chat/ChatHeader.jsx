import {
  FiMenu,
  FiPhone,
  FiVideo,
  FiMoreVertical,
} from "react-icons/fi";

import useChat from "../../hooks/useChat";

function ChatHeader({ onMenuClick }) {
  const { selectedChat } = useChat();

  if (!selectedChat) {
    return (
      <header className="flex h-24 lg:h-20 items-center justify-center border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 transition-colors duration-300">
        <p className="text-gray-500 dark:text-gray-400 text-base">
          Select a conversation
        </p>
      </header>
    );
  }

  return (
    <header className="flex h-28 lg:h-20 items-center justify-between border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 lg:px-6 shadow-sm transition-colors duration-300">

      {/* Left */}
      <div className="flex min-w-0 items-center gap-5 lg:gap-4">

        <button
          onClick={onMenuClick}
          className="rounded-xl p-3 transition hover:bg-gray-100 dark:hover:bg-slate-800 lg:hidden"
        >
          <FiMenu size={28} />
        </button>

        <div className="relative flex-shrink-0">
          <img
            src={selectedChat.avatar}
            alt={selectedChat.name}
            className="h-16 w-16 lg:h-12 lg:w-12 rounded-full object-cover"
          />

          {selectedChat.online && (
            <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white dark:border-slate-900 bg-green-500"></span>
          )}
        </div>

        <div className="min-w-0">
          <h2 className="truncate text-xl lg:text-base font-semibold text-gray-800 dark:text-white">
            {selectedChat.name}
          </h2>

          <p
            className={`truncate text-base lg:text-xs ${
              selectedChat.online
                ? "text-green-600"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {selectedChat.online
              ? "Online"
              : "Last seen recently"}
          </p>
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-3 lg:gap-1">

        <button
          className="rounded-full p-3 lg:p-2.5 transition hover:bg-gray-100 dark:hover:bg-slate-800"
          title="Voice Call"
        >
          <FiPhone
            size={24}
            className="text-gray-600 dark:text-gray-300"
          />
        </button>

        <button
          className="rounded-full p-3 lg:p-2.5 transition hover:bg-gray-100 dark:hover:bg-slate-800"
          title="Video Call"
        >
          <FiVideo
            size={24}
            className="text-gray-600 dark:text-gray-300"
          />
        </button>

        <button
          className="rounded-full p-3 lg:p-2.5 transition hover:bg-gray-100 dark:hover:bg-slate-800"
          title="More"
        >
          <FiMoreVertical
            size={24}
            className="text-gray-600 dark:text-gray-300"
          />
        </button>

      </div>
    </header>
  );
}

export default ChatHeader;