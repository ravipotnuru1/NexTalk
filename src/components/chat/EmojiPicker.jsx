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
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-full p-2 text-gray-500 transition hover:bg-gray-200 hover:text-blue-600"
      >
        <FiSmile size={22} />
      </button>

      {open && (
        <div className="absolute bottom-14 left-0 z-50 grid w-64 grid-cols-5 gap-2 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl">

          {emojis.map((emoji) => (
            <button
              key={emoji}
              type="button"
              onClick={() => {
                onSelect?.(emoji);
                setOpen(false);
              }}
              className="rounded-lg p-2 text-2xl hover:bg-blue-100"
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