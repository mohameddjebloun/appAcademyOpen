// your code here
/**
 * Filters out words from an array that have a length greater than 5.
 *
 * @param {string[]} words - The array of words to filter.
 * @returns {string[]} - The filtered array of words.
 */
function longWords(words) {
  let newWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
      newWords.push(words[i]);
    }
  }
  return newWords;
}

console.log(longWords(["bike", "skateboard", "scooter", "moped"])); // [ 'skateboard', 'scooter' ]
console.log(longWords(["couscous", "soup", "ceviche", "solyanka", "taco"])); // [ 'couscous', 'ceviche', 'solyanka' ]
