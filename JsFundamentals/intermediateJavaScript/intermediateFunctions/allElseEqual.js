function sumArray(arr) {
  let sum = 0;
  // Loop through the array and calculate the sum of its elements
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function allElseEqual(arr) {
  // Calculate half of the sum of the array elements
  let sumHalf = sumArray(arr) / 2;
  // Check if any element in the array is equal to half of the sum
  for (let i = 0; i < arr.length; i++) {
    // If found, return the element
    if (sumHalf == arr[i]) {
      return arr[i];
    }
  }
  // If no element is found, return null
  return null;
}

console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4])); // null
