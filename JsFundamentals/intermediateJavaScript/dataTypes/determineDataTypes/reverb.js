// Your code here
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
/**
 * Adds a reverb effect to a string by repeating the portion of the string after the last vowel.
 * @param {string} str - The input string to add reverb to.
 * @returns {string|null} - The new string with reverb effect, or null if the input is not a string.
 */
function reverb(str) {
  if (typeof str !== "string") {
    return null;
  }
  let strLastVowel = lastVowel(str);
  let lastVowelIndex = str.indexOf(strLastVowel);
  let newStr = `${str}${str.slice(lastVowelIndex)}`;
  return newStr;
}
console.log(reverb("running")); // runninging
console.log(reverb("FAMILY")); // FAMILYILY
console.log(reverb("trash")); // trashash
console.log(reverb("DISH")); // DISHISH
console.log(reverb(197393)); // null
