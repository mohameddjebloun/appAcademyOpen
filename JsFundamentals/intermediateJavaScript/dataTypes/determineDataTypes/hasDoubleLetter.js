// your code here
/*
  Checks if a given string has consecutive double letters.
  Returns true if the string contains consecutive double letters, false if not, and null if the input is not a string.
 */
let hasDoubleLetter = function (string) {
  if (typeof string !== "string") {
    return null;
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      return true;
    }
  }
  return false;
};
console.log(hasDoubleLetter("deer")); // true
console.log(hasDoubleLetter("boot camp")); // true
console.log(hasDoubleLetter("toggle")); // true
console.log(hasDoubleLetter("taco")); // false
console.log(hasDoubleLetter("jumper")); // false
console.log(hasDoubleLetter(18)); // null
console.log(hasDoubleLetter(["array"])); // null
