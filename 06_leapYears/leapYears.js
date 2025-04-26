const leapYears = function (year) {
  if (year % 100 == 0 && year % 400 == 0) {
    console.log("100 and 400");

    return true;
  } else if (year % 100 == 0) {
    return false;
  } else if (year % 4 == 0) {
    console.log("4");

    return true;
  } else {
    console.log("false");

    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
