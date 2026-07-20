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
      <header className="flex h-20 items-center justify-center border-b border-gray-200 bg-white">
        <p className="text-gray-500 text-sm sm:text-base">
          Select a conversation
        </p>
      </header>
    );
  }

  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6 shadow-sm">

      {/* Left */}
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">

        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 transition hover:bg-gray-100 lg:hidden"
        >
          <FiMenu size={22} />
        </button>

        <div className="relative flex-shrink-0">

          <img
            src={selectedChat.avatar}
            alt={selectedChat.name}
            className="h-12 w-12 rounded-full object-cover"
          />

          {selectedChat.online && (
            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500"></span>
          )}

        </div>

        <div className="min-w-0">

          <h2 className="truncate text-base sm:text-lg font-semibold text-gray-800">
            {selectedChat.name}
          </h2>

          <p
            className={`truncate text-xs sm:text-sm ${
              selectedChat.online
                ? "text-green-600"
                : "text-gray-500"
            }`}
          >
            {selectedChat.online
              ? "Online"
              : "Last seen recently"}
          </p>

        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-1 sm:gap-2">

        <button
          className="rounded-full p-2.5 sm:p-3 transition hover:bg-gray-100"
          title="Voice Call"
        >
          <FiPhone
            size={20}
            className="text-gray-600"
          />
        </button>

        <button
          className="rounded-full p-2.5 sm:p-3 transition hover:bg-gray-100"
          title="Video Call"
        >
          <FiVideo
            size={20}
            className="text-gray-600"
          />
        </button>

        <button
          className="rounded-full p-2.5 sm:p-3 transition hover:bg-gray-100"
          title="More"
        >
          <FiMoreVertical
            size={20}
            className="text-gray-600"
          />
        </button>

      </div>

    </header>
  );
}

export default ChatHeader;