import { FaCheck, FaCheckDouble } from "react-icons/fa";

function MessageBubble({ message }) {
  const isMe = message.sender === "me";

  return (
    <div
      className={`mb-4 flex ${
        isMe ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[85%]
          sm:max-w-[75%]
          rounded-3xl
          px-4
          py-3
          shadow-sm
          break-words
          transition-all
          duration-300
          ${
            isMe
              ? "rounded-br-md bg-blue-600 text-white"
              : "rounded-bl-md border border-gray-200 bg-white text-gray-800"
          }
        `}
      >
        <p className="whitespace-pre-wrap break-words text-sm leading-6 sm:text-[15px]">
          {message.text}
        </p>

        <div
          className={`mt-2 flex items-center justify-end gap-1 text-xs ${
            isMe
              ? "text-blue-100"
              : "text-gray-500"
          }`}
        >
          <span>{message.time}</span>

          {isMe &&
            (message.read ? (
              <FaCheckDouble
                size={12}
                className="text-cyan-300"
              />
            ) : (
              <FaCheck size={11} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default MessageBubble;