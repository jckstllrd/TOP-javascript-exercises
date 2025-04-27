const palindromes = function (string) {
  let punctuation = /[\.,?!]/g;
  string = string.replace(punctuation, "").toLowerCase().split(" ").join("");

  let backwards = string.split("").reverse().join("").replace(punctuation, "");
  console.log(backwards);

  if (string == backwards) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
