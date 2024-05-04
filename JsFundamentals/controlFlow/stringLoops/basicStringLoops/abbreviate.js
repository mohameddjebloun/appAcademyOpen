// your code here
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
console.log(abbreviate("wonderful")); // 'wndrfl'
console.log(abbreviate("mystery")); // 'mystry'
console.log(abbreviate("Accordian")); // 'ccrdn'
