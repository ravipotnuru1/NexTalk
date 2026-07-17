function TypingIndicator() {
  return (
    <div className="mb-4 flex justify-start">
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm">

        <span
          className="h-2.5 w-2.5 animate-bounce rounded-full bg-gray-400"
          style={{ animationDelay: "0s" }}
        ></span>

        <span
          className="h-2.5 w-2.5 animate-bounce rounded-full bg-gray-400"
          style={{ animationDelay: "0.2s" }}
        ></span>

        <span
          className="h-2.5 w-2.5 animate-bounce rounded-full bg-gray-400"
          style={{ animationDelay: "0.4s" }}
        ></span>

      </div>
    </div>
  );
}

export default TypingIndicator;