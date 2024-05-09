// your code here
/* Finds the minimum value in a given array
Returns that minimum value or null if the array is empty */
function minValue(nums) {
  if (nums.length === 0) {
    return null;
  }
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  return min;
}
console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3])); // -7
console.log(minValue([])); // null
