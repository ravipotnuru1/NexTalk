import { FaBars } from "react-icons/fa";

function SideBarToggle({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-lg
        bg-white
        shadow-md
        transition
        hover:bg-blue-50
        hover:text-blue-600
        md:hidden
      "
      aria-label="Toggle Sidebar"
    >
      <FaBars size={20} />
    </button>
  );
}

export default SideBarToggle;