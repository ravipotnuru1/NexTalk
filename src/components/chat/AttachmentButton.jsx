import { useRef } from "react";
import { FiPaperclip } from "react-icons/fi";

function AttachmentButton({ onFileSelect }) {
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      onFileSelect?.(file);
    }

    e.target.value = "";
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        hidden
        onChange={handleChange}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="rounded-full p-2 text-gray-500 transition hover:bg-gray-200 hover:text-blue-600"
      >
        <FiPaperclip size={22} />
      </button>
    </>
  );
}

export default AttachmentButton;