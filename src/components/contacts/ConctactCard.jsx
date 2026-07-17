function ContactCard({ contact, onSelect }) {
  return (
    <button
      onClick={() => onSelect?.(contact)}
      className="flex w-full items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm transition hover:shadow-md hover:border-blue-500"
    >
      <div className="relative">
        <img
          src={contact.avatar}
          alt={contact.name}
          className="h-14 w-14 rounded-full object-cover"
        />

        {contact.online && (
          <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500"></span>
        )}
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">
          {contact.name}
        </h3>

        <p className="text-sm text-gray-500">
          {contact.email}
        </p>
      </div>
    </button>
  );
}

export default ContactCard;