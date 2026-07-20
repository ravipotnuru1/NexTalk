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
        title="Attach File"
        onClick={() => inputRef.current?.click()}
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          text-gray-500
          transition-all
          duration-300
          hover:bg-gray-200
          hover:text-blue-600
        "
      >
        <FiPaperclip size={20} />
      </button>
    </>
  );
}

export default AttachmentButton;