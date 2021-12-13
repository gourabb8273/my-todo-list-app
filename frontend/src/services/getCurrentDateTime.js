/**
 * RETURN CURRENT DATE TIME & YEAR IN READABLE FORMAT (EXAMPLE: Dec 5, 2021)
 */

function getCurrentDateTime() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()].slice(0, 3);
  const currentDateTime = month + " " + day + ", " + year;
  return currentDateTime;
}

export default getCurrentDateTime;
