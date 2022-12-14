function yearsDifference(date1, date2, decimals = 8) {
  var difference = date1.getTime() - date2.getTime();
  return (difference / 1000 / 60 / 60 / 24 / 365.25).toFixed(decimals);
}

function age() {
  const current_date = new Date();
  // Be aware that the month is 0-indexed, so 11 is actually December
  const birthdate = new Date(2001, 11, 7, 12, 30, 0, 0);

  const real_age = yearsDifference(current_date, birthdate);
  const integer = Math.floor(real_age);
  const decimal = real_age - integer;

  document.getElementById("integer").innerHTML = integer;
  document.getElementById("decimal").innerHTML = decimal
    .toFixed(8)
    .toString()
    .substring(1);
}

document.addEventListener("DOMContentLoaded", function () {
  age();
  setInterval(age, 500);
});
