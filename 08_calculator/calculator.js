const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

const multiply = function (array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
};

const power = function (num1, pow) {
  return num1 ** pow;
};

const factorial = function (num) {
  let array = [];
  let value = 1;
  if (num == 0 || num == 1) {
    return 1;
  }
  for (let i = 1; i <= num; i++) {
    array.push(i);
  }

  for (let x = 0; x < array.length; x++) {
    value *= array[x];
  }

  return value;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
