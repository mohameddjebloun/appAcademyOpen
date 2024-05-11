/**
 * Generates a sequence of numbers starting from a given value and each subsequent value being three times the previous value.
 * @param {number} start - The starting value of the sequence.
 * @param {number} length - The length of the sequence to generate.
 * @returns {number[]} - An array containing the generated sequence of numbers.
 */
function tripleSequence(start, length) {
  let sequence = [start];
  for (let i = 1; i < length; i++) {
    let newValue = sequence[i - 1] * 3;
    sequence.push(newValue);
  }
  return sequence;
}

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]
