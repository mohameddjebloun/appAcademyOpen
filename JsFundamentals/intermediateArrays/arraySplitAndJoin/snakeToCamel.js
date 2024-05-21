// Your code here
/**
 * Splits a string into an array of substrings based on a specified separator.
 *
 * @param {string} string - The string to be split.
 * @returns {Array} - An array of substrings.
 */
function separateString(string) {
  return string.split("_");
}

/**
 * Capitalizes the first letter of a word.
 * @param {string} word - The word to capitalize.
 * @returns {string} - The word with the first letter capitalized.
 */
function capitalizeFirstLetter(word) {
  const firstLetter = word[0];
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = word.slice(1);
  const capitalizedWord = firstLetterCap + remainingLetters.toLowerCase();
  return capitalizedWord;
}

/**
 * Converts a snake_case sentence to camelCase.
 *
 * @param {string} sentence - The snake_case sentence to be converted.
 * @returns {string} The camelCase version of the sentence.
 */
function snakeToCamel(sentence) {
  let words = separateString(sentence);
  for (let i = 0; i < words.length; i++) {
    words[i] = capitalizeFirstLetter(words[i]);
  }
  let newSentence = words.join("");
  return newSentence;
}

console.log(snakeToCamel("snakes_go_hiss")); // 'SnakesGoHiss'
console.log(snakeToCamel("say_hello_world")); // 'SayHelloWorld'
console.log(snakeToCamel("app_academy_is_cool")); // 'AppAcademyIsCool'
console.log(snakeToCamel("APp_ACADEMY_iS_cOol")); // 'AppAcademyIsCool'
