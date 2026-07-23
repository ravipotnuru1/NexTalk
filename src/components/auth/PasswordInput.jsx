import { useState } from "react";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";

function PasswordInput({
  label = "Password",
  name = "password",
  value,
  onChange,
  placeholder = "Enter your password",
  error,
  required = false,
  disabled = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
        >
          {label}
          {required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>
      )}

      <div
        className={`flex h-14 items-center overflow-hidden rounded-2xl border transition-all duration-300 ${
          error
            ? "border-red-500 bg-red-50 dark:bg-red-950/20 focus-within:border-red-500 focus-within:ring-4 focus-within:ring-red-100 dark:focus-within:ring-red-900/30"
            : "border-gray-200 bg-gray-50 dark:border-slate-700 dark:bg-slate-800 hover:border-blue-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100 dark:focus-within:ring-blue-900/30"
        }`}
      >
        <div className="flex h-full w-14 items-center justify-center text-gray-400 dark:text-gray-500">
          <FiLock size={20} />
        </div>

        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoComplete="off"
          className="h-full flex-1 border-none bg-transparent text-base text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none"
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={disabled}
          aria-label={
            showPassword ? "Hide password" : "Show password"
          }
          className="flex h-full w-14 items-center justify-center text-gray-500 dark:text-gray-400 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
        >
          {showPassword ? (
            <FiEyeOff size={20} />
          ) : (
            <FiEye size={20} />
          )}
        </button>
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export default PasswordInput;