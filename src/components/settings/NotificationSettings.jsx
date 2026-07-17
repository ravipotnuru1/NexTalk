import { useState } from "react";

function NotificationSettings() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="flex items-center justify-between rounded-2xl bg-white p-5 shadow">

      <div>
        <h3 className="font-semibold text-gray-800">
          Notifications
        </h3>

        <p className="text-sm text-gray-500">
          Receive chat notifications
        </p>
      </div>

      <input
        type="checkbox"
        checked={enabled}
        onChange={() => setEnabled(!enabled)}
        className="h-5 w-5 accent-blue-600"
      />

    </div>
  );
}

export default NotificationSettings;