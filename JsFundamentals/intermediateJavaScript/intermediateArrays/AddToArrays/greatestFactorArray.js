/**
 * Checks if a number is even.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is even, false otherwise.
 */
function isEven(num) {
  return num % 2 === 0;
}

/**
 * Returns an array of factors of a given number.
 *
 * @param {number} num - The number to find the factors of.
 * @returns {number[]} - An array of factors of the given number.
 */
function factorsOf(num) {
  let factors = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

/**
 * Returns an array containing the greatest factors of each number in the input array.
 * If a number is even, the greatest factor is determined by finding all factors of the number and selecting the largest one.
 * If a number is odd, the number itself is considered the greatest factor.
 * @param {number[]} array - The input array of numbers.
 * @returns {number[]} - An array containing the greatest factors of each number in the input array.
 */
function greatestFactorArray(array) {
  let factorsArray = [];
  for (let i = 0; i < array.length; i++) {
    if (isEven(array[i])) {
      let factors = factorsOf(array[i]);
      let greatestFactor = factors[factors.length - 1];
      factorsArray.push(greatestFactor);
    } else {
      factorsArray.push(array[i]);
    }
  }
  return factorsArray;
}

console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]
