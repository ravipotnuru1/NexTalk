import { FaComments } from "react-icons/fa";

function EmptyState({
  title = "No Conversations",
  message = "Start a new conversation to begin chatting.",
}) {
  return (
    <div className="flex h-full min-h-[400px] flex-col items-center justify-center px-6 text-center">

      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">

        <FaComments className="text-5xl text-blue-600" />

      </div>

      <h2 className="text-2xl font-bold text-gray-800">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-gray-500">
        {message}
      </p>

    </div>
  );
}

export default EmptyState;