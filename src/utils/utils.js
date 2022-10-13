// short stings with ... at the end
export const shortName = (name, stringLength = 22) => {
  const newName = `${name.substring(0, stringLength)}...`;
  return newName;
};

// date formater
export const dateFormater = (stringDate, separator) => {
  // convert string to date object
  var date = new Date(stringDate);
  console.log(date, "date");
  var day = date.getDate();
  // add +1 to month because getMonth() returns month from 0 to 11
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  // show date and month in two digits
  // if month is less than 10, add a 0 before it
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  // now we have day, month and year
  // use the separator to join them
  return day + separator + month + separator + year;
};
