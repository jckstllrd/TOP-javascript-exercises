const sumAll = function (num1, num2) {
  let total = 0;
  let largeNum = num2;
  let smallNum = num1;

  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  if (num1 > num2) {
    largeNum = num1;
    smallNum = num2;
  }
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  }
  for (let i = smallNum; i <= largeNum; i++) {
    total += i;
  }
  console.log(total);

  return total;
};

// Do not edit below this line
module.exports = sumAll;
