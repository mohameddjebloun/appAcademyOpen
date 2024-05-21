// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

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
 * Returns the index of the last vowel in a given string.
 * @param {string} str - The input string.
 * @returns {number} - The index of the last vowel in the string.
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
 * Translates a sentence by repeating the last syllable of words with three or more letters.
 * @param {string} sentence - The input sentence to translate.
 * @returns {string} - The translated sentence.
 */
function repeatingTranslate(sentence) {
  let words = separateString(sentence);
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 3) {
      let index = lastVowelIndex(words[i]);
      if (index === words[i].length - 1) {
        words[i] = words[i] + words[i];
      } else {
        words[i] =
          words[i].substring(0, words[i].length) +
          words[i].substring(index, words[i].length);
      }
    }
  }
  let newSentence = words.join(" ");
  return newSentence;
}

console.log(repeatingTranslate("we like to go running fast")); // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash")); // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish")); // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France")); // "herer familyily flewew to FranceFrance"
