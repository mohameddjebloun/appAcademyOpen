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
 * Abbreviates a word by removing all vowels from it.
 * @param {string} word - The word to be abbreviated.
 * @returns {string} - The abbreviated word.
 */
function abbreviate(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  let newWord = [];
  for (let i = 0; i < word.length; i++) {
    if (!vowels.includes(word[i].toLowerCase())) {
      newWord.push(word[i]);
    }
  }
  return newWord.join("");
}

/**
 * Abbreviates words in a sentence that have more than 4 characters.
 * @param {string} sentence - The sentence to abbreviate.
 * @returns {string} The abbreviated sentence.
 */
function abbreviateWords(sentence) {
  let words = separateString(sentence);
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      words[i] = abbreviate(words[i]);
    }
  }
  let newSentence = words.join(" ");
  return newSentence;
}

console.log(abbreviateWords("what a wonderful place to live")); // what a wndrfl plc to live
console.log(abbreviateWords("she sends an excellent message ")); // she snds an xcllnt mssg
