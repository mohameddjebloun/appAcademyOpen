function eitherStringIncluded(sentence, word1, word2) {
  // your code here...
  if (sentence.includes(word1)) {
    return true;
  } else if (sentence.includes(word2)) {
    return true;
  } else {
    return false;
  }
}

console.log(eitherStringIncluded("how now brown cow?", "panther", "cow")); //=> true
console.log(eitherStringIncluded("Question?", "Answer", "?")); //=> true
console.log(eitherStringIncluded("I love programming", "apple", "potato")); //=> false
console.log(eitherStringIncluded("Dance party!", "?", "what")); //=> false
