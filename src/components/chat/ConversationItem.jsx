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
        dark:border-slate-700
        px-5
        py-5
        lg:px-4
        lg:py-4
        text-left
        transition-all
        duration-300
        ${
          active
            ? "bg-blue-50 dark:bg-slate-800 border-r-4 border-blue-600"
            : "hover:bg-gray-50 dark:hover:bg-slate-800"
        }
      `}
    >
      {/* Avatar */}
      <div className="relative flex-shrink-0">

        <img
          src={chat.avatar}
          alt={chat.name}
          className="h-16 w-16 lg:h-14 lg:w-14 rounded-full object-cover transition duration-300 group-hover:scale-105"
        />

        {chat.online && (
          <span className="absolute bottom-1 right-1 h-4 w-4 lg:h-3.5 lg:w-3.5 rounded-full border-2 border-white dark:border-slate-800 bg-green-500"></span>
        )}

      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">

        <div className="mb-2 flex items-center justify-between">

          <h3
            className={`truncate text-lg lg:text-base ${
              active
                ? "font-bold text-blue-700 dark:text-blue-400"
                : "font-semibold text-gray-800 dark:text-white"
            }`}
          >
            {chat.name}
          </h3>

          <span
            className={`text-sm lg:text-xs ${
              chat.unread > 0
                ? "font-semibold text-blue-600"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {chat.time}
          </span>

        </div>

        <div className="flex items-center justify-between gap-3">

          <div className="flex min-w-0 items-center gap-2">

            {chat.muted ? (
              <FaVolumeMute className="text-sm text-gray-400" />
            ) : (
              <FaCheckDouble className="text-sm text-sky-500" />
            )}

            <p className="truncate text-base lg:text-sm text-gray-500 dark:text-gray-300">
              {chat.lastMessage}
            </p>

          </div>

          {chat.unread > 0 && (
            <div className="flex h-7 min-w-[28px] lg:h-6 lg:min-w-[24px] items-center justify-center rounded-full bg-blue-600 px-2 text-xs font-bold text-white">
              {chat.unread}
            </div>
          )}

        </div>

      </div>
    </button>
  );
}

export default ConversationItem;