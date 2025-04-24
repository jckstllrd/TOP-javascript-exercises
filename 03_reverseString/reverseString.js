const reverseString = function (string) {
  let reversedList = [];
  let stringList = string.split("");
  for (let i = stringList.length - 1; i >= 0; i--) {
    reversedList.push(stringList[i]);
  }
  let reversedString = reversedList.join("");
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
