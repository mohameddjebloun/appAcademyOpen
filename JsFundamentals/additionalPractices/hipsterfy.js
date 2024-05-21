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
 * Removes the last vowel from a given string.
 * If the string contains a vowel, it removes the last occurrence of the vowel.
 * If the string does not contain any vowels, it returns the original string.
 *
 * @param {string} str - The input string.
 * @returns {string} The modified string with the last vowel removed, or the original string if no vowels are found.
 */
function removeLastVowel(str) {
    let strLastVowelIndex = lastVowelIndex(str);
    if (strLastVowelIndex !== 0) {
      let newStr = `${str.slice(0, strLastVowelIndex)}${str.slice(
        strLastVowelIndex + 1
      )}`;
      return newStr;
    }
    else if (strLastVowelIndex === 0) {
      return str.slice(1);
    }
    return str;
  }

/**
 * Removes the last vowel from each word in a sentence.
 *
 * @param {string} sentence - The input sentence.
 * @returns {string} The modified sentence with the last vowel removed from each word.
 */
function hipsterfy(sentence) {
  // Separate the sentence into individual words
  let words = separateString(sentence);

  // Iterate through each word
  for (let i = 0; i < words.length; i++) {
    words[i] = removeLastVowel(words[i]);
  }

  // Join the modified words back into a sentence
  let newSentence = words.join(" ");

  // Return the modified sentence
  return newSentence;
}

console.log(hipsterfy("When should everyone wake up?")); // 'Whn shold everyon wak p?'
console.log(hipsterfy("get ready for our bootcamp")); // 'gt redy fr or bootcmp'
console.log(hipsterfy("panthers are great animals")); // 'panthrs ar gret animls'
