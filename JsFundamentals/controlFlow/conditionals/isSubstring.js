function isSubstring(searchString, subString) {
  if (searchString.toLowerCase().indexOf(subString.toLowerCase()) === -1) {
    return false;
  } else {
    return true;
  }
}

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "joys")); // => false
