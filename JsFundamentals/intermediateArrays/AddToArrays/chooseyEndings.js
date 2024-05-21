// Your code here
/**
 * Filters an array of words and returns only the words that end with a specific suffix.
 * @param {Array} words - The array of words to filter.
 * @param {string} suffix - The suffix to check for at the end of each word.
 * @returns {Array} - An array of words that end with the specified suffix.
 */
function chooseyEndings(words, suffix) {
  if (!Array.isArray(words)) {
    return [];
  }
  let newWords = [];
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    if (currentWord.endsWith(suffix)) {
      newWords.push(currentWord);
    }
  }
  return newWords;
}

console.log(
  chooseyEndings(
    ["family", "hound", "catalyst", "fly", "timidly", "bond"],
    "ly"
  )
);
// [ 'family', 'fly', 'timidly' ]

console.log(
  chooseyEndings(
    ["family", "hound", "catalyst", "fly", "timidly", "bond"],
    "nd"
  )
);
// [ 'hound', 'bond' ]

console.log(chooseyEndings(["simplicity", "computer", "felicity"], "icity"));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(["simplicity", "computer", "felicity"], "ily"));
// [ ]

console.log(chooseyEndings(17, "ily"));
// [ ]
