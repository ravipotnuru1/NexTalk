import { useState } from "react";

import useAuth from "../../hooks/useAuth";

import ProfileCard from "../../components/profile/ProfileCard";
import EditProfileModal from "../../components/profile/EditProfileModal";

function Profile() {
  const { user } = useAuth();

  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-gray-50
        via-blue-50
        to-gray-100
        px-4
        py-8
        sm:px-6
        lg:px-8
      "
    >
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center justify-center">

        <ProfileCard
          onEdit={() => setOpen(true)}
        />

        <EditProfileModal
          open={open}
          onClose={() => setOpen(false)}
          user={user}
        />

      </div>
    </div>
  );
}

export default Profile;