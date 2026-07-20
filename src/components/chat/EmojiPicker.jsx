import { useState } from "react";
import { FiSmile } from "react-icons/fi";

const emojis = [
  "😀",
  "😁",
  "😂",
  "🤣",
  "😊",
  "😍",
  "😘",
  "😎",
  "🤩",
  "🤔",
  "😭",
  "😡",
  "👍",
  "👏",
  "🙏",
  "❤️",
  "🔥",
  "🎉",
  "💯",
  "✨",
];

function EmojiPicker({ onSelect }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        title="Emoji"
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex
          h-12
          w-12
          lg:h-10
          lg:w-10
          items-center
          justify-center
          rounded-full
          text-gray-500
          dark:text-gray-300
          transition-all
          duration-300
          hover:bg-gray-200
          dark:hover:bg-slate-700
          hover:text-blue-600
        "
      >
        <FiSmile size={24} className="lg:text-[20px]" />
      </button>

      {open && (
        <div
          className="
            absolute
            bottom-16
            left-0
            z-50
            grid
            w-72
            lg:w-64
            grid-cols-5
            gap-2
            rounded-2xl
            border
            border-gray-200
            dark:border-slate-700
            bg-white
            dark:bg-slate-800
            p-4
            shadow-xl
          "
        >
          {emojis.map((emoji) => (
            <button
              key={emoji}
              type="button"
              onClick={() => {
                onSelect?.(emoji);
                setOpen(false);
              }}
              className="
                flex
                h-12
                w-12
                lg:h-10
                lg:w-10
                items-center
                justify-center
                rounded-lg
                text-2xl
                transition
                hover:bg-blue-100
                dark:hover:bg-slate-700
              "
            >
              {emoji}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default EmojiPicker;