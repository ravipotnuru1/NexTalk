import { useState } from "react";

import useAuth from "../../hooks/useAuth";

import ProfileCard from "../../components/profile/ProfileCard";
import EditProfileModal from "../../components/profile/EditProfileModal";

function Profile() {
  const { user } = useAuth();

  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">

      <ProfileCard
        onEdit={() => setOpen(true)}
      />

      <EditProfileModal
        open={open}
        onClose={() => setOpen(false)}
        user={user}
      />

    </div>
  );
}

export default Profile;