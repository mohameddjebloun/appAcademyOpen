// your code here
/**
 * Generates an array of numbers that are divisible by either 4 or 6, but not both, up to a given maximum value.
 *
 * @param {number} max - The maximum value up to which numbers should be generated.
 * @returns {number[]} - An array of numbers that are divisible by either 4 or 6, but not both.
 */
function pitPat(max) {
  let numbers = [];
  for (let i = 0; i <= max; i++) {
    let isDivisibleBySix = i % 6 === 0 && i % 4 !== 0;
    let isDivisibleByFour = i % 6 !== 0 && i % 4 === 0;
    if (isDivisibleByFour || isDivisibleBySix) {
      numbers.push(i);
    }
  }
  return numbers;
}
console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]
