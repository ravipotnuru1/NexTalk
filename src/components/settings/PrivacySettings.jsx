import { useState } from "react";

function PrivacySettings() {
  const [onlineStatus, setOnlineStatus] = useState(true);

  return (
    <div className="flex items-center justify-between rounded-2xl bg-white p-5 shadow">

      <div>
        <h3 className="font-semibold text-gray-800">
          Show Online Status
        </h3>

        <p className="text-sm text-gray-500">
          Allow others to see when you're online
        </p>
      </div>

      <input
        type="checkbox"
        checked={onlineStatus}
        onChange={() =>
          setOnlineStatus(!onlineStatus)
        }
        className="h-5 w-5 accent-blue-600"
      />

    </div>
  );
}

export default PrivacySettings;