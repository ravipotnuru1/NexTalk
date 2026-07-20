import useTheme from "../../hooks/useTheme";

function ThemeSwitch() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      className="
        flex items-center justify-between
        rounded-2xl
        bg-white
        dark:bg-slate-800
        p-4
        sm:p-5
        shadow-sm
        transition-colors
        duration-300
      "
    >
      <div className="pr-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
          Dark Mode
        </h3>

        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Switch between light and dark theme
        </p>
      </div>

      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className={`relative h-9 w-16 rounded-full transition-all duration-300 ${
          isDark ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-0.5 h-8 w-8 rounded-full bg-white shadow-md transition-all duration-300 ${
            isDark ? "left-[30px]" : "left-0.5"
          }`}
        />
      </button>
    </div>
  );
}

export default ThemeSwitch;