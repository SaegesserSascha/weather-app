export const formatDate = ({ date } = new Date().toISOString.split("T")[0]) => {
  const values = date.split("-");

  const weekday = getWeekday(date);
  const day = getDay(values[2]);
  const month = getMonthByIndex(values[1]);

  return `${weekday}, ${day}. ${month}`;
}

function getWeekday(date) {
  const options = { weekday: "long" };
  const dayOfWeek = new Date(date).toLocaleDateString("de-ch", options);
  return dayOfWeek;
}

function getDay(value) {
  try {
    var dayValue = parseInt(value);
  } catch (err) {
    console.error(err);
  }
  return dayValue;
}

function getMonthByIndex(index) {
  try {
    var monthIndex = parseInt(index);
  } catch (err) {
    console.error(err);
  }
  const months = ["Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"];
  return months[monthIndex];
}