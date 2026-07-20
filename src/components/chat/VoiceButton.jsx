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
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        transition-all
        duration-300
        ${
          recording
            ? "bg-red-100 text-red-600 shadow-sm"
            : "text-gray-500 hover:bg-gray-200 hover:text-blue-600"
        }
      `}
    >
      {recording ? (
        <FiStopCircle size={20} />
      ) : (
        <FiMic size={20} />
      )}
    </button>
  );
}

export default VoiceButton;