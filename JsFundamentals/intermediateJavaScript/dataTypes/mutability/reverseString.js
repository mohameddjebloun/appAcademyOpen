// your code here
/**
 * Reverses a given string.
 * @param {string} str - The string to be reversed.
 * @returns {string} - The reversed string.
 */
function reverseString(str) {
  let reversedStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr.push(str[i]);
  }
  return reversedStr.join("");
}
console.log(reverseString("fish")); // 'hsif'
console.log(reverseString("marathon")); // 'nohtaram'
