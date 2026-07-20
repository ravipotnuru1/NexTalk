import { FaCheckDouble, FaVolumeMute } from "react-icons/fa";

function ConversationItem({
  chat,
  active,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        group
        flex
        w-full
        items-center
        gap-4
        border-b
        border-gray-100
        px-4
        py-4
        text-left
        transition-all
        duration-300
        ${
          active
            ? "bg-blue-50 border-r-4 border-blue-600"
            : "hover:bg-gray-50"
        }
      `}
    >
      {/* Avatar */}
      <div className="relative flex-shrink-0">

        <img
          src={chat.avatar}
          alt={chat.name}
          className="h-14 w-14 rounded-full object-cover transition duration-300 group-hover:scale-105"
        />

        {chat.online && (
          <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500"></span>
        )}

      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">

        <div className="mb-1 flex items-center justify-between">

          <h3
            className={`truncate text-base ${
              active
                ? "font-bold text-blue-700"
                : "font-semibold text-gray-800"
            }`}
          >
            {chat.name}
          </h3>

          <span
            className={`text-xs ${
              chat.unread > 0
                ? "font-semibold text-blue-600"
                : "text-gray-500"
            }`}
          >
            {chat.time}
          </span>

        </div>

        <div className="flex items-center justify-between gap-3">

          <div className="flex min-w-0 items-center gap-2">

            {chat.muted ? (
              <FaVolumeMute className="text-xs text-gray-400" />
            ) : (
              <FaCheckDouble className="text-xs text-sky-500" />
            )}

            <p className="truncate text-sm text-gray-500">
              {chat.lastMessage}
            </p>

          </div>

          {chat.unread > 0 && (
            <div className="flex h-6 min-w-[24px] items-center justify-center rounded-full bg-blue-600 px-2 text-xs font-bold text-white">
              {chat.unread}
            </div>
          )}

        </div>

      </div>
    </button>
  );
}

export default ConversationItem;