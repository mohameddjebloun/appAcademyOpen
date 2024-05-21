/**
 * Calculates the summation of numbers from 1 to a given number.
 *
 * @param {number} num - The number up to which the summation is calculated.
 * @returns {number} - The summation of numbers from 1 to the given number.
 */
function summationNumber(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

/**
 * Generates a sequence of numbers based on a given starting number and length.
 * Each number in the sequence is the summation of the previous number in the sequence.
 *
 * @param {number} start - The starting number of the sequence.
 * @param {number} length - The desired length of the sequence.
 * @returns {number[]} - An array containing the generated sequence of numbers.
 */
function summationSequence(start, length) {
  let sequence = [start];
  while (sequence.length < length) {
    sequence.push(summationNumber(sequence[sequence.length - 1]));
  }
  return sequence;
}

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]
