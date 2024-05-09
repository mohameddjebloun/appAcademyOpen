// Your code here
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
 * Returns the previous prime number before the given number.
 * If the given number is less than or equal to 2, returns null.
 * @param {number} num - The number to find the previous prime number before.
 * @returns {number|null} - The previous prime number before the given number, or null if the given number is less than or equal to 2.
 */
function prevPrime(num) {
  if (num <= 2) {
    return null;
  }
  let prevPrime = num - 1;
  while (prevPrime > 2) {
    if (isPrime(prevPrime)) {
      return prevPrime;
    }
    prevPrime--;
  }
  return 2;
}
console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7)); // 5
console.log(prevPrime(4)); // 3
console.log(prevPrime(2)); // null
console.log(prevPrime(1)); // null
