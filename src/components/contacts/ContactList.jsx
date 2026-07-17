import { useMemo, useState } from "react";

import chats from "../../data/chats";

import ContactCard from "./ContactCard";
import SearchContacts from "./SearchContacts";

function ContactList() {
  const [search, setSearch] = useState("");

  const filteredContacts = useMemo(() => {
    return chats.filter((contact) =>
      contact.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="mx-auto max-w-4xl p-6">

      <h1 className="mb-6 text-3xl font-bold text-gray-800">
        Contacts
      </h1>

      <SearchContacts
        search={search}
        setSearch={setSearch}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {filteredContacts.length === 0 ? (
          <div className="col-span-full rounded-xl bg-white p-10 text-center text-gray-500 shadow">
            No contacts found.
          </div>
        ) : (
          filteredContacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
            />
          ))
        )}
      </div>

    </div>
  );
}

export default ContactList;