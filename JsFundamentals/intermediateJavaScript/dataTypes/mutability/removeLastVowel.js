// your code here
/**
 * Returns the last vowel in a given string.
 * @param {string} str - The input string.
 * @returns {string|null} - The last vowel in the string, or null if no vowels are found.
 */
function lastVowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let lastVowel = null;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      lastVowel = str[i];
    }
  }
  return lastVowel;
}
/**
 * Removes the last vowel from a given string.
 * If the string contains a vowel, it removes the last occurrence of the vowel.
 * If the string does not contain any vowels, it returns the original string.
 *
 * @param {string} str - The input string.
 * @returns {string} The modified string with the last vowel removed, or the original string if no vowels are found.
 */
function removeLastVowel(str) {
  let strLastVowel = lastVowel(str);
  if (strLastVowel) {
    let lastVowelIndex = str.lastIndexOf(strLastVowel);
    let newStr = `${str.slice(0, lastVowelIndex)}${str.slice(
      lastVowelIndex + 1
    )}`;
    return newStr;
  }
  return str;
}
console.log(removeLastVowel("bootcamp")); // 'bootcmp'
console.log(removeLastVowel("better")); // 'bettr'
console.log(removeLastVowel("graph")); // 'grph'
console.log(removeLastVowel("thy")); // 'thy'
