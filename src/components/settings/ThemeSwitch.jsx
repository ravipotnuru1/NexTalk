import useTheme from "../../hooks/useTheme";

function ThemeSwitch() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm">
      <div>
        <h3 className="font-semibold text-gray-800">
          Dark Mode
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Switch between light and dark theme
        </p>
      </div>

      <button
        onClick={toggleTheme}
        className={`relative h-8 w-16 rounded-full transition-all duration-300 ${
          isDark ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <div
          className={`absolute top-0 h-8 w-8 rounded-full bg-white shadow-md transition-all duration-300 ${
            isDark ? "left-8" : "left-0"
          }`}
        />
      </button>
    </div>
  );
}

export default ThemeSwitch;