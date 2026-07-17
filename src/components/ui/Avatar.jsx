function Avatar({
  src,
  alt = "Avatar",
  size = "md",
  online = false,
}) {
  const sizes = {
    sm: "h-10 w-10",
    md: "h-14 w-14",
    lg: "h-20 w-20",
    xl: "h-28 w-28",
  };

  return (
    <div className="relative inline-block">
      <img
        src={src || "https://i.pravatar.cc/150?img=10"}
        alt={alt}
        className={`${sizes[size]} rounded-full object-cover border border-gray-300`}
      />

      {online && (
        <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
      )}
    </div>
  );
}

export default Avatar;