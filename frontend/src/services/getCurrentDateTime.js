/**
 * RETURN CURRENT DATE TIME & YEAR IN READABLE FORMAT
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

  const d = new Date();
  const year = d.getFullYear();
  const day = d.getDay();
  const month = months[d.getMonth()].slice(0, 3);
  const currentDateTime = month + " " + day + ", " + year;
  return currentDateTime;
}

export default getCurrentDateTime;
