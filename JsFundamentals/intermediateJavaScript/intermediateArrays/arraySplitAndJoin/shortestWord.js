// Your code here
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
 * Finds the shortest word in a given sentence.
 *
 * @param {string} sentence - The sentence to find the shortest word from.
 * @returns {string} The shortest word in the sentence.
 */
function shortestWord(sentence) {
  // Separate the sentence into individual words
  let words = separateString(sentence);

  // Initialize the shortest word as the first word in the array
  let shortestWrd = words[0];

  // Iterate through the remaining words in the array
  for (let i = 1; i < words.length; i++) {
    // If the current word is shorter or equal in length to the shortest word, update the shortest word
    if (words[i].length <= shortestWrd.length) {
      shortestWrd = words[i];
    }
  }

  // Return the shortest word
  return shortestWrd;
}

console.log(shortestWord("what a wonderful life")); // 'a'
console.log(shortestWord("the quick brown fox jumps")); // 'fox'
console.log(shortestWord("do what you enjoy")); // 'do'
