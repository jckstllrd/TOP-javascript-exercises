const convertToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);
  let result = parseFloat(celsius.toFixed(1));
  console.log(result);
  return result;
};

const convertToFahrenheit = function (celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  let result = parseFloat(fahrenheit.toFixed(1));
  console.log(result);
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
