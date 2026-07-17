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
      className={`rounded-full p-2 transition ${
        recording
          ? "bg-red-100 text-red-600"
          : "text-gray-500 hover:bg-gray-200 hover:text-blue-600"
      }`}
    >
      {recording ? (
        <FiStopCircle size={22} />
      ) : (
        <FiMic size={22} />
      )}
    </button>
  );
}

export default VoiceButton;