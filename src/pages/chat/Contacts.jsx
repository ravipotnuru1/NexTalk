import { useMemo, useState } from "react";
import chats from "../../data/chats";
import ConversationItem from "../../components/chat/ConversationItem";

function Contacts() {
  const [search, setSearch] = useState("");

  const filteredContacts = useMemo(() => {
    return chats.filter((contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">

      {/* Header */}
      <div className="border-b bg-white px-4 py-5 shadow-sm sm:px-6">

        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          Contacts
        </h1>

        <p className="mt-1 text-sm text-gray-500 sm:text-base">
          Start a new conversation
        </p>

      </div>

      {/* Search */}
      <div className="p-4 sm:p-5">

        <input
          type="text"
          placeholder="Search contacts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full
            rounded-2xl
            border
            border-gray-300
            bg-white
            px-4
            py-3
            text-sm
            outline-none
            transition
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-200
          "
        />

      </div>

      {/* Contact List */}
      <div className="space-y-1 px-2 pb-6 sm:px-4">

        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <ConversationItem
              key={contact.id}
              chat={contact}
              active={false}
              onClick={() => {}}
            />
          ))
        ) : (
          <div className="mt-24 px-4 text-center">

            <h2 className="text-xl font-semibold text-gray-700">
              No Contacts Found
            </h2>

            <p className="mt-2 text-gray-500">
              Try searching with another name.
            </p>

          </div>
        )}

      </div>

    </div>
  );
}

export default Contacts;