// your code here
/**
 * Removes the last 'num' elements from an array and returns them in a new array.
 *
 * @param {Array} array - The array from which elements will be removed.
 * @param {number} num - The number of elements to remove from the array.
 * @returns {Array} - An array containing the removed elements.
 */
function popper(array, num) {
  let removedElements = [];
  for (let i = 0; i < num; i++) {
    let newElement = array.pop();
    removedElements.push(newElement);
  }
  return removedElements;
}

let arr1 = ["a", "b", "c", "d", "e"];
console.log(popper(arr1, 2)); // [ 'e', 'd' ]
console.log(arr1); // [ 'a', 'b', 'c' ]

let arr2 = ["kale", "spinach", "collard greens", "cabbage"];
console.log(popper(arr2, 1)); // [ 'cabbage' ]
console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]
