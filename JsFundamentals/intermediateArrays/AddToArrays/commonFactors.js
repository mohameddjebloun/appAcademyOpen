// Your code here
/**
 * Returns the minimum of two numbers.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} The minimum of the two numbers.
 */
function getMin(num1, num2) {
  if (num1 < num2) {
    return num1;
  }
  return num2;
}

/**
 * Returns an array of common factors between two numbers.
 *
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number[]} - An array of common factors.
 */
function commonFactors(num1, num2) {
  let factors = [];
  let min = getMin(num1, num2);

  // Iterate from 1 to the minimum of the two numbers
  for (let i = 1; i <= min; i++) {
    let dividesNum1 = num1 % i === 0;
    let dividesNum2 = num2 % i === 0;

    // If both numbers are divisible by i, add it to the factors array
    if (dividesNum1 && dividesNum2) {
      factors.push(i);
    }
  }

  return factors;
}

console.log(commonFactors(50, 30)); // [1, 2, 5, 10]
console.log(commonFactors(8, 4)); // [1, 2, 4]
console.log(commonFactors(4, 8)); // [1, 2, 4]
console.log(commonFactors(12, 24)); // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44)); // [1, 2, 11, 22]
console.log(commonFactors(7, 9)); // [1]
