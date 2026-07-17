import React from "react";

function Input({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
  disabled = false,
  required = false,
  className = "",
}) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        autoComplete="off"
        className={`
          w-full rounded-xl border
          px-4 py-3
          text-sm
          outline-none
          transition-all duration-300
          ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 focus:border-blue-500"
          }
          ${
            disabled
              ? "cursor-not-allowed bg-gray-100"
              : "bg-white"
          }
          focus:ring-4
          ${
            error
              ? "focus:ring-red-100"
              : "focus:ring-blue-100"
          }
          ${className}
        `}
      />

      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;