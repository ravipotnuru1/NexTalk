export function formatDate(date) {
  if (!date) return "";

  const currentDate = new Date();
  const inputDate = new Date(date);

  const isToday =
    currentDate.toDateString() === inputDate.toDateString();

  if (isToday) {
    return inputDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  const yesterday = new Date();
  yesterday.setDate(currentDate.getDate() - 1);

  if (yesterday.toDateString() === inputDate.toDateString()) {
    return "Yesterday";
  }

  return inputDate.toLocaleDateString([], {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default formatDate;