// your code here
/**
 * Checks if a number is prime.
 *
 * @param {number} number - The number to check.
 * @returns {boolean} - True if the number is prime, false otherwise.
 */
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * Returns an array of prime numbers from the given array.
 *
 * @param {number[]} array - The array of numbers.
 * @returns {number[]} - An array of prime numbers.
 */
function choosePrimes(nums) {
  let primeNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (isPrime(nums[i])) {
      primeNums.push(nums[i]);
    }
  }
  return primeNums;
}

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
