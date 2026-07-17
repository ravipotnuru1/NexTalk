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
    <div className="min-h-screen bg-gray-100">

      {/* Header */}

      <div className="border-b bg-white px-6 py-5">

        <h1 className="text-3xl font-bold text-gray-800">
          Contacts
        </h1>

        <p className="mt-1 text-gray-500">
          Start a new conversation
        </p>

      </div>

      {/* Search */}

      <div className="p-5">

        <input
          type="text"
          placeholder="Search contacts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
        />

      </div>

      {/* Contact List */}

      <div className="space-y-1 px-4 pb-5">

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
          <div className="mt-24 text-center">

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