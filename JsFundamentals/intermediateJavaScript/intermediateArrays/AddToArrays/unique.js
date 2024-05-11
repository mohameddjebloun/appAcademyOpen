// Your code here
/**
 * Returns an array with unique elements from the input array.
 * @param {Array} arr - The input array.
 * @returns {Array} - An array with unique elements.
 */
function unique(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}
console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(["a", "b", "c", "b"])); // ['a', 'b', 'c']
