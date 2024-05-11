// your code here
/**
 * Checks if a number is even.
 * @param {number} number - The number to check.
 * @returns {boolean} - True if the number is even, false otherwise.
 */
function isEven(number) {
  let evenCondition = number % 2 === 0;
  return evenCondition;
}
/**
 * Returns an array of even numbers up to a given maximum value.
 *
 * @param {number} max - The maximum value to generate even numbers up to.
 * @returns {number[]} - An array of even numbers.
 */
function evenNumbers(max) {
  let numbers = [];
  for (let i = 2; i < max; i++) {
    if (isEven(i)) {
      numbers.push(i);
    }
  }
  return numbers;
}
console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]
