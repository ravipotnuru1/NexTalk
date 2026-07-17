import Sidebar from "../chat/Sidebar";

function MobileSidebar({
  isOpen,
  onClose,
  chats,
  selectedChat,
  setSelectedChat,
}) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed
          top-0
          left-0
          z-50
          h-screen
          w-80
          transform
          bg-white
          transition-transform
          duration-300
          md:hidden
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        <Sidebar
          chats={chats}
          selectedChat={selectedChat}
          setSelectedChat={(chat) => {
            setSelectedChat(chat);
            onClose();
          }}
        />
      </div>
    </>
  );
}

export default MobileSidebar;