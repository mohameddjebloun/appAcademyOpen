// Your code here
/**
 * Mutates an array of numbers by adding a given number to each element.
 *
 * @param {number[]} nums - The array of numbers to be mutated.
 * @param {number} num - The number to be added to each element.
 */
function additionMutator(nums, num) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] += num;
  }
}
let nums1 = [3, 7, 1, 2];
additionMutator(nums1, 4);
console.log(nums1); // [ 7, 11, 5, 6 ]

let nums2 = [11, 9, 4];
additionMutator(nums2, -1);
console.log(nums2); // [ 10, 8, 3 ]
