// your code here
/* Calculates the average value of the numbers in the array
Returns the average or null if the array is empty */
function avgVal(arr) {
  if (arr.length === 0) {
    return null;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  return avg;
}
console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null
