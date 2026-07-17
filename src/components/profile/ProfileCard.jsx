import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";

function ProfileCard({ onEdit }) {
  const { user } = useAuth();

  return (
    <div className="mx-auto w-full max-w-xl rounded-3xl bg-white p-8 shadow-lg">
      <div className="flex flex-col items-center">

        <img
          src={user?.avatar || "https://i.pravatar.cc/150?img=12"}
          alt={user?.name}
          className="h-32 w-32 rounded-full border-4 border-blue-500 object-cover"
        />

        <h2 className="mt-5 text-3xl font-bold text-gray-800">
          {user?.name || "Guest User"}
        </h2>

        <p className="mt-1 text-gray-500">
          Frontend Developer
        </p>

      </div>

      <div className="mt-8 space-y-5">

        <div className="flex items-center gap-3">
          <FiMail className="text-blue-600" />
          <span>{user?.email}</span>
        </div>

        <div className="flex items-center gap-3">
          <FiPhone className="text-blue-600" />
          <span>+91 9876543210</span>
        </div>

        <div className="flex items-center gap-3">
          <FiMapPin className="text-blue-600" />
          <span>Chennai, India</span>
        </div>

      </div>

      <button
        onClick={onEdit}
        className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Edit Profile
      </button>
    </div>
  );
}

export default ProfileCard;