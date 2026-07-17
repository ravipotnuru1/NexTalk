import useTheme from "../../hooks/useTheme";

function ThemeSwitch() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-between rounded-2xl bg-white p-5 shadow">
      <div>
        <h3 className="font-semibold text-gray-800">
          Dark Mode
        </h3>

        <p className="text-sm text-gray-500">
          Switch between light and dark theme
        </p>
      </div>

      <button
        onClick={toggleTheme}
        className={`h-8 w-16 rounded-full transition ${
          isDark ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <div
          className={`h-8 w-8 rounded-full bg-white shadow transition ${
            isDark ? "translate-x-8" : ""
          }`}
        />
      </button>
    </div>
  );
}

export default ThemeSwitch;