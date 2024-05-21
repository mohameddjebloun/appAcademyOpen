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
 * Checks if a sentence contains a specific word.
 * @param {string} sentence - The sentence to search in.
 * @param {string} targetWord - The word to search for.
 * @returns {boolean} - True if the sentence contains the target word, false otherwise.
 */
function containsWord(sentence, targetWord) {
  // Separate the sentence into individual words
  let words = separateString(sentence);

  // Iterate through each word
  for (let i = 0; i < words.length; i++) {
    // Check if the current word matches the target word (case-insensitive)
    if (words[i].toLowerCase() === targetWord) {
      return true;
    }
  }

  // If no match is found, return false
  return false;
}

console.log(containsWord("sounds like a plan", "like")); // true
console.log(containsWord("They are great", "they")); // true
console.log(containsWord("caterpillars are great animals", "cat")); // false
console.log(containsWord("Cast the net", "internet")); // false
