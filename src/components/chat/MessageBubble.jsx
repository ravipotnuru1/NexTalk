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
          max-w-[80%]
          rounded-3xl
          px-5
          py-3
          shadow-sm
          break-words
          ${
            isMe
              ? "rounded-br-md bg-blue-600 text-white"
              : "rounded-bl-md bg-white text-gray-800 border border-gray-200"
          }
        `}
      >
        <p className="text-sm leading-6">
          {message.text}
        </p>

        <div
          className={`mt-2 flex items-center gap-1 text-xs ${
            isMe
              ? "justify-end text-blue-100"
              : "justify-end text-gray-500"
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