// Your code here
/**
 * Calculates the sum of adjacent elements in an array.
 *
 * @param {number[]} nums - The input array of numbers.
 * @returns {number[]} - An array containing the sum of adjacent elements.
 */
function adjacentSums(nums) {
  let newArr = [];
  for (let i = 0; i < nums.length - 1; i++) {
    adjacentSum = nums[i] + nums[i + 1];
    newArr.push(adjacentSum);
  }
  return newArr;
}

console.log(adjacentSums([3, 8, 7, 1])); // [ 11, 15, 8 ]
console.log(adjacentSums([10, 5, 4, 3, 9])); // [ 15, 9, 7, 12 ]
console.log(adjacentSums([2, -3, 3])); // [-1, 0]
