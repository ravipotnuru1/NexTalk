function TypingIndicator() {
  return (
    <div className="mb-5 flex justify-start">
      <div
        className="
          flex
          items-center
          gap-2
          rounded-3xl
          rounded-bl-md
          border
          border-gray-200
          dark:border-slate-700
          bg-white
          dark:bg-slate-800
          px-5
          py-4
          shadow-sm
          transition-colors
          duration-300
        "
      >
        <span
          className="h-3 w-3 lg:h-2.5 lg:w-2.5 animate-bounce rounded-full bg-gray-400"
          style={{ animationDelay: "0s" }}
        ></span>

        <span
          className="h-3 w-3 lg:h-2.5 lg:w-2.5 animate-bounce rounded-full bg-gray-400"
          style={{ animationDelay: "0.2s" }}
        ></span>

        <span
          className="h-3 w-3 lg:h-2.5 lg:w-2.5 animate-bounce rounded-full bg-gray-400"
          style={{ animationDelay: "0.4s" }}
        ></span>
      </div>
    </div>
  );
}

export default TypingIndicator;