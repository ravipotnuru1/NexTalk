import { useState } from "react";
import { FiMic, FiStopCircle } from "react-icons/fi";

function VoiceButton({ onClick }) {
  const [recording, setRecording] = useState(false);

  const handleClick = () => {
    if (!recording) {
      setRecording(true);
      onClick?.();
    } else {
      setRecording(false);
      alert("🎤 Recording stopped.");
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      title={recording ? "Stop Recording" : "Voice Message"}
      className={`
        flex
        h-12
        w-12
        lg:h-10
        lg:w-10
        items-center
        justify-center
        rounded-full
        transition-all
        duration-300
        ${
          recording
            ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 shadow-sm"
            : "text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 hover:text-blue-600"
        }
      `}
    >
      {recording ? (
        <FiStopCircle size={24} className="lg:text-[20px]" />
      ) : (
        <FiMic size={24} className="lg:text-[20px]" />
      )}
    </button>
  );
}

export default VoiceButton;