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
 * Returns the index of the first vowel in a given string.
 * @param {string} str - The input string.
 * @returns {string|null} - The first vowel found in the string, or null if no vowels are found.
 */
function firstVowelIndex(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      return i;
    }
  }
  return null;
}

/**
 * Removes the consonants before the first vowel in each word of a sentence.
 * @param {string} sentence - The input sentence.
 * @returns {string} - The modified sentence with consonants removed before the first vowel in each word.
 */
function consonantCancel(sentence) {
  // your code here
  let words = separateString(sentence);
  for (let i = 0; i < words.length; i++) {
    let index = firstVowelIndex(words[i]);
    words[i] = words[i].substring(index, words[i].length);
  }
  let newSentence = words.join(" ");
  return newSentence;
}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"
