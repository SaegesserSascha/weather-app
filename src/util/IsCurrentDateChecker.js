export function isCurrentDate(date) {
  if (date == null) return;
  const currentDate = new Date().toISOString().split("T")[0];
  return date === currentDate;
}