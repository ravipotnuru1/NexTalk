import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useAuth from "../../hooks/useAuth";
import ROUTES from "../../constants/routes";

function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate(ROUTES.LOGIN);
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full rounded-2xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
    >
      Logout
    </button>
  );
}

export default LogoutButton;