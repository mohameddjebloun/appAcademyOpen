// your code here
/**
 * Generates an array of numbers within a specified range.
 *
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number[]} - An array of numbers within the specified range.
 */
function range(min, max) {
  let numbers = [];
  let num = min;
  while (num <= max && num >= min) {
    numbers.push(num);
    num++;
  }
  return numbers;
}
console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
console.log(range(10, 3)); // []
