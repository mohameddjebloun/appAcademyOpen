function wordWithinArray(array, word) {
  // your code here...
  return array.indexOf(word) !== -1;
}

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple")
); //=> true

console.log(wordWithinArray(["dog", "cat", "camel", "bird"], "camel")); //=> true

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "pineapple")
); //=> false

console.log(wordWithinArray(["dog", "cat", "camel", "bird"], "panther")); //=> false
