// your code here
/**
 * Returns a new array with each element in the input array tripled.
 *
 * @param {number[]} nums - The input array of numbers.
 * @returns {number[]} - A new array with each element tripled.
 */
function tripler(nums) {
  let tripledNums = [];
  for (let i = 0; i < nums.length; i++) {
    let tripledNum = nums[i] * 3;
    tripledNums.push(tripledNum);
  }
  return tripledNums;
}

console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
