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
 * Finds the longest word in a sentence.
 *
 * @param {string} sentence - The sentence to search for the longest word.
 * @returns {string} - The longest word found in the sentence.
 */
function longestWord(sentence) {
  let words = separateString(sentence);
  let longestWrd = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWrd.length) {
      longestWrd = words[i];
    }
  }

  return longestWrd;
}

console.log(longestWord("where did everyone go")); // 'everyone'
console.log(longestWord("prefer simplicity over complexity")); // 'simplicity'
console.log(longestWord("")); // ''
