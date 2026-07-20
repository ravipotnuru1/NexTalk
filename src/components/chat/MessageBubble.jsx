import { FaCheck, FaCheckDouble } from "react-icons/fa";

function MessageBubble({ message }) {
  const isMe = message.sender === "me";

  return (
    <div
      className={`mb-5 flex ${
        isMe ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[88%]
          sm:max-w-[75%]
          rounded-3xl
          px-5
          py-4
          shadow-sm
          break-words
          transition-all
          duration-300
          ${
            isMe
              ? "rounded-br-md bg-blue-600 text-white"
              : "rounded-bl-md border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-white"
          }
        `}
      >
        <p className="whitespace-pre-wrap break-words text-base lg:text-sm leading-7 lg:leading-6">
          {message.text}
        </p>

        <div
          className={`mt-3 flex items-center justify-end gap-1 text-xs ${
            isMe
              ? "text-blue-100"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          <span>{message.time}</span>

          {isMe &&
            (message.read ? (
              <FaCheckDouble
                size={13}
                className="text-cyan-300"
              />
            ) : (
              <FaCheck size={12} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default MessageBubble;