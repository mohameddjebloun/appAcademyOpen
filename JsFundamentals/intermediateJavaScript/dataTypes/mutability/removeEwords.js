// your code here
/**
 * Removes words containing the letter 'e' from a given sentence.
 *
 * @param {string} sentence - The sentence to remove words from.
 * @returns {string} The modified sentence with words containing 'e' removed.
 */
function removeEWords(sentence) {
  sentence = sentence.split(" ");
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].toLowerCase().includes("e")) {
      sentence.splice(i, 1);
      i--;
    }
  }
  sentence = sentence.join(" ");
  return sentence;
}
console.log(removeEWords("What time is it everyone?")); // 'What is it'
console.log(removeEWords("Enter the building")); // 'building'
