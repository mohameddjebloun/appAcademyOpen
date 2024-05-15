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
 * Joins an array of strings into a single string with spaces between each element.
 *
 * @param {string[]} string - The array of strings to join.
 * @returns {string} - The joined string.
 */
function joinString(string) {
  return string.join(" ");
}

/**
 * Reverses the order of words in a sentence.
 *
 * @param {string} sentence - The sentence to be reversed.
 * @returns {string} - The reversed sentence.
 */
function reverseSentence(sentence) {
  let words = separateString(sentence);
  let reversedWords = [];
  for (let i = 0; i < words.length; i++) {
    reversedWords.unshift(words[i]);
  }
  reversedSentence = joinString(reversedWords);
  return reversedSentence;
}

console.log(reverseSentence("I am pretty hungry")); // 'hungry pretty am I'
console.log(reverseSentence("follow the yellow brick road")); // 'road brick yellow the follow'
