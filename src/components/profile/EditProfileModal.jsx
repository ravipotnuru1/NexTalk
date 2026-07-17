import { useState } from "react";

function EditProfileModal({
  open,
  onClose,
  user,
}) {
  const [name, setName] = useState(user?.name || "");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

      <div className="w-full max-w-md rounded-2xl bg-white p-6">

        <h2 className="mb-5 text-2xl font-bold">
          Edit Profile
        </h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="mb-5 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-xl border px-5 py-2"
          >
            Cancel
          </button>

          <button
            onClick={onClose}
            className="rounded-xl bg-blue-600 px-5 py-2 text-white"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}

export default EditProfileModal;