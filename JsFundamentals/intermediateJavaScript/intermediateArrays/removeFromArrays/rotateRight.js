// your code here
/**
 * Rotates the elements of an array to the right by a specified number of positions.
 * @param {Array} array - The array to rotate.
 * @param {number} num - The number of positions to rotate the array to the right.
 * @returns {Array} - The rotated array.
 */
function rotateRight(array, num) {
  let newArr = array.slice();
  for (let i = 0; i < num; i++) {
    let removedLastElement = newArr.pop();
    newArr.unshift(removedLastElement);
  }
  return newArr;
}

let arr = ["a", "b", "c", "d", "e"];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ["wombat", "koala", "opossum", "kangaroo"];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]
