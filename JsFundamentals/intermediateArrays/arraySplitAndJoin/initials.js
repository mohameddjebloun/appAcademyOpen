// your code here
/**
 * Splits a string into an array of substrings based on a specified separator.
 *
 * @param {string} string - The string to be split.
 * @returns {Array} - An array of substrings.
 */
function separateString(string) {
  return string.split(" ");
}

/**
 * Returns an array containing the first letter of each string in the input array, converted to uppercase.
 * @param {string[]} array - The input array of strings.
 * @returns {string[]} - An array containing the first letter of each string in the input array, converted to uppercase.
 */
function getFirstLetters(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let firstLetter = array[i][0];
    newArray.push(firstLetter.toUpperCase());
  }
  return newArray;
}

/**
 * Returns the initials of a given name.
 * @param {string} name - The name to get the initials from.
 * @returns {string} - The initials of the name.
 */
function initials(name) {
  let names = separateString(name);
  let initials = getFirstLetters(names);
  return initials.join("");
}

console.log(initials("anna paschall")); // 'AP'
console.log(initials("Mary La Grange")); // 'MLG'
console.log(initials("brian crawford scott")); // 'BCS'
console.log(initials("Benicio Monserrate Rafael del Toro Sánchez")); // 'BMRDTS'
