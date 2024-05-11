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
/**
 * Logs numbers between a given range with a specified step.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @param {number} step - The step value to increment by.
 */
function logBetweenStepper(min, max, step) {
  let numbers = range(min, max);

  for (let i = 0; i < numbers.length; i += step) {
    console.log(numbers[i]);
  }
}
// Examples:
logBetweenStepper(5, 9, 1); /* prints out:
5
6
7
8
9*/

logBetweenStepper(-10, 15, 5); /* prints out:
-10
-5
0
5
10
15*/
