function isOdd(num) {
  // return num % 2 !== 0;
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
