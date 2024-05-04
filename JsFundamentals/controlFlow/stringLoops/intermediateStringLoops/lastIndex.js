function lastIndex(str, char) {
  // your code here
  let lastIndex;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      lastIndex = i;
    }
  }
  return lastIndex;
}

console.log(lastIndex("abca", "a")); // 3
console.log(lastIndex("mississipi", "i")); // 9
console.log(lastIndex("octagon", "o")); // 5
console.log(lastIndex("programming", "m")); // 7
