// your code here
/**
 * Rotates the elements of an array by a given number of positions.
 * Positive values rotate the elements to the right, while negative values rotate the elements to the left.
 *
 * @param {Array} array - The array to rotate.
 * @param {number} num - The number of positions to rotate the array.
 * @returns {Array} - The rotated array.
 */
function rotate(array, num) {
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      let removedLastElement = array.pop();
      array.unshift(removedLastElement);
    }
  } else {
    for (let i = 0; i < -num; i++) {
      let removedFirstElement = array.shift();
      array.push(removedFirstElement);
    }
  }
  return array;
}

let arr = ["a", "b", "c", "d", "e"];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ["wombat", "koala", "opossum", "kangaroo"];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
