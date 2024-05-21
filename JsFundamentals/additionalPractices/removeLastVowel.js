// your code here
/**
 * Returns the index of the last vowel in a given string.
 * @param {string} str - The input string.
 * @returns {string|null} - The last vowel in the string, or null if no vowels are found.
 */
function lastVowelIndex(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let lastVowelIndex = null;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        lastVowelIndex = i;
      }
    }
    return lastVowelIndex;
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
    let strLastVowelIndex = lastVowelIndex(str);
    if (strLastVowelIndex) {
      let newStr = `${str.slice(0, strLastVowelIndex)}${str.slice(
        strLastVowelIndex + 1
      )}`;
      return newStr;
    }
    return str;
  }


console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'