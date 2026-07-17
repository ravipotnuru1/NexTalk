import { FiAlertTriangle } from "react-icons/fi";

function ErrorState({
  title = "Something went wrong",
  description = "Please try again later.",
  onRetry,
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-12 text-center shadow">

      <FiAlertTriangle
        size={70}
        className="mb-5 text-red-500"
      />

      <h2 className="text-2xl font-semibold text-gray-700">
        {title}
      </h2>

      <p className="mt-2 max-w-sm text-gray-500">
        {description}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Retry
        </button>
      )}

    </div>
  );
}

export default ErrorState;