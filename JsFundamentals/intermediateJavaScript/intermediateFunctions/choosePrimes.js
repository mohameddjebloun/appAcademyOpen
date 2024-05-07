// your code here
let isPrime = function (number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
function choosePrimes(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (isPrime(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
