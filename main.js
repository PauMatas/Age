function yearsDifference(date1, date2, decimals = 8) {
  var difference = date1.getTime() - date2.getTime();
  return (difference / 1000 / 60 / 60 / 24 / 365.25).toFixed(decimals);
}

function age() {
  const currentdate = new Date();
  // Be aware that the month is 0-indexed, so 11 is actually December
  const birthdate = new Date(2001, 11, 7, 12, 30, 0, 0);

  const realage = yearsDifference(currentdate, birthdate);
  const integer = Math.floor(realage);
  const decimal = Math.floor((realage - integer) * 10 ** 8);

  document.getElementById("integer").innerHTML = integer;
  document.getElementById("decimal").innerHTML = `.${decimal}`;
}

document.addEventListener("DOMContentLoaded", function () {
  age();
  setInterval(age, 500);
});
