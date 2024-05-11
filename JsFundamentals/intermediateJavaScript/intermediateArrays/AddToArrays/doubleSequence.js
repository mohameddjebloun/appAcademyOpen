// Your code here
/**
 * Generates a sequence of numbers by doubling the previous value.
 *
 * @param {number} base - The starting value of the sequence.
 * @param {number} length - The length of the sequence to generate.
 * @returns {number[]} - An array containing the generated sequence.
 */
function doubleSequence(base, length) {
  if (length === 0) {
    return [];
  }
  let sequence = [base];
  for (let i = 1; i < length; i++) {
    let newValue = sequence[i - 1] * 2;
    sequence.push(newValue);
  }
  return sequence;
}
console.log(doubleSequence(7, 3)); // [7, 14, 28]
console.log(doubleSequence(3, 5)); // [3, 6, 12, 24, 48]
console.log(doubleSequence(5, 3)); // [5, 10, 20]
console.log(doubleSequence(5, 4)); // [5, 10, 20, 40]
console.log(doubleSequence(5, 0)); // [ ]
