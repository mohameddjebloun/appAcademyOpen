/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

const mirrorArray = (array) => {
  // Your code here
  let mirroredArray = [];
  for (let i = 0; i < array.length; i++) {
    mirroredArray.push(array[i]);
  }
  for (let i = array.length - 1; i >= 0; i--) {
    mirroredArray.push(array[i]);
  }
  return mirroredArray;
};
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mirrorArray;
} catch (e) {
  return null;
}
