// your code here
/**
 * Converts a word to uppercase and adds an exclamation mark at the end.
 * @param {string} word - The word to be yelled.
 * @returns {string} The yelled word.
 */
function yell(word) {
  return `${word.toUpperCase()}!`;
}

/**
 * Transforms an array of words into an array of yelled words.
 * @param {string[]} words - The array of words to be transformed.
 * @returns {string[]} - The array of yelled words.
 */
function yeller(words) {
  let yelledWords = [];
  for (let i = 0; i < words.length; i++) {
    let yelledWord = yell(words[i]);
    yelledWords.push(yelledWord);
  }
  return yelledWords;
}

console.log(yeller(["hello", "world"])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(["kiwi", "orange", "mango"])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]
