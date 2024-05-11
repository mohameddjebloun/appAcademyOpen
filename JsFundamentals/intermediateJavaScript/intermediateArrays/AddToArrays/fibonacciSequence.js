// Your code here
/**
 * Generates a Fibonacci sequence of a given length.
 *
 * @param {number} length - The length of the Fibonacci sequence to generate.
 * @returns {number[]} - The Fibonacci sequence.
 */
function fibonacciSequence(length) {
  if (length === 0) {
    return [];
  } else if (length === 1) {
    return [1];
  }
  let sequence = [1, 1];
  let i = 2;
  while (sequence.length < length) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
    i++;
  }
  return sequence;
}

console.log(fibonacciSequence(4)); // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5)); // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8)); // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0)); // [ ]
console.log(fibonacciSequence(1)); // [ 1 ]
console.log(fibonacciSequence(2)); // [ 1, 1 ]
