// your code here
/**
 * Generates an array of numbers that are divisible by either 3 or 5, up to a given maximum value.
 *
 * @param {number} max - The maximum value up to which to generate the numbers.
 * @returns {number[]} - An array of numbers that are divisible by either 3 or 5.
 */
function fizzBuzz(max) {
  let numbers = [];
  for (let i = 0; i < max; i++) {
    let isDivisibleByThree = i % 3 === 0 && i % 5 !== 0;
    let isDivisibleByFive = i % 3 !== 0 && i % 5 === 0;
    if (isDivisibleByThree || isDivisibleByFive) {
      numbers.push(i);
    }
  }
  return numbers;
}
console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]
