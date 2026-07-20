function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  className = "",
}) {
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-gray-200 hover:bg-gray-300 text-gray-800",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50",
    danger:
      "bg-red-600 hover:bg-red-700 text-white",
    success:
      "bg-green-600 hover:bg-green-700 text-white",
  };

  const sizes = {
    sm: "px-5 py-3 text-sm",
    md: "px-6 py-4 text-lg",
    lg: "px-8 py-5 text-xl",
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        font-semibold
        transition-all
        duration-300
        active:scale-95
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg
            className="h-5 w-5 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-20"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />

            <path
              className="opacity-90"
              fill="currentColor"
              d="M12 2a10 10 0 0 1 10 10h-4a6 6 0 0 0-6-6V2z"
            />
          </svg>

          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;