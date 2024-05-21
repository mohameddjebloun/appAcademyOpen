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
function pickPrimes(array) {
  let primeArray = [];
  for (let i = 0; i < array.length; i++) {
    if (isPrime(array[i])) {
      primeArray.push(array[i]);
    }
  }
  return primeArray;
}

console.log(pickPrimes([2, 3, 4, 5, 6])); // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017])); // [101, 103, 2017]
