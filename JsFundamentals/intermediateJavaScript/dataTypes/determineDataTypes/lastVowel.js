// your code here
/* Finds the last vowel in a given string
Returns that last vowel or null if no vowels are found */
function lastVowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let lastVowel = null;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      lastVowel = str[i];
    }
  }
  return lastVowel;
}
console.log(lastVowel("battery")); // 'e'
console.log(lastVowel("TUNNEL")); // 'E'
console.log(lastVowel("dog")); // 'o'
console.log(lastVowel("conventional")); // 'a'
console.log(lastVowel("rhythm")); // null
