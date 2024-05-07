// This function calculates the number of vowels in a given word.
function vowelsNumber(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    // Check if the current character is a vowel then increment the count
    if (vowels.includes(word[i])) {
      count++;
    }
  }
  return count;
}

// This function finds the word with the most vowels in a given sentence.
function mostVowels(sentence) {
  let words = sentence.split(" ");
  let word = words[0];
  for (let i = 0; i < words.length; i++) {
    // Compare the number of vowels in the current word with the number of vowels in the word with the most vowels so far
    if (vowelsNumber(words[i]) > vowelsNumber(word)) {
      // If the current word has more vowels, update the word with the most vowels
      word = words[i];
    }
  }
  // Return the word with the most vowels
  return word;
}
console.log(mostVowels("what a wonderful life")); // "wonderful"
