function doubleLetterCount(string) {
  // your code here
  let count = 0;
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] === string[i + 1]) {
      count += 1;
      i += 1;
    }
  }
  return count;
}

console.log(doubleLetterCount("the jeep rolled down the hill")); // 3
console.log(doubleLetterCount("bootcamp")); // 1
