// your code here
/* Finds the maximum value in a given array
Returns that maximum value or null if the array is empty */
function maxValue(nums) {
  if (nums.length === 0) {
    return null;
  }
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
}

console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3])); // 3
console.log(maxValue([])); // null
