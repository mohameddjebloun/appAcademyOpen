// Your code here
function threeIncreasing(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1] - 1 && array[i] === array[i + 2] - 2) {
      return true;
    }
  }
  return false;
}
console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4])); // true
console.log(threeIncreasing([2, 7, 8, 9])); // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6])); // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8])); // false
