/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:
console.log(hipsterfy("When should everyone wake up?")); // 'Whn shold everyon wak p?'
console.log(hipsterfy("get ready for our bootcamp")); // 'gt redy fr or bootcmp'
console.log(hipsterfy("panthers are great animals")); // 'panthrs ar gret animls'
*/

let lastVowelIndex = function (str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let lastVowelIndex = null;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      lastVowelIndex = i;
    }
  }
  return lastVowelIndex;
};

let removeLastVowel = function (word) {
  // Your code here
  let index = lastVowelIndex(word);
  if (index === null) {
    return word;
  }
  return word.substring(0, index) + word.substring(index + 1, word.length);
};

let hipsterfy = function (sentence) {
  // Your code here
  let words = sentence.split(" ");
  words.forEach(function (word, i) {
    words[i] = removeLastVowel(word);
  });
  return words.join(" ");
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = hipsterfy;
} catch (e) {
  module.exports = null;
}
