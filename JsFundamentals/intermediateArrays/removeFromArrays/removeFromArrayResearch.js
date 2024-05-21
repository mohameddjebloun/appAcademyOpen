/**
 * Removes an element from an array based on the specified location.
 * @param {string} location - The location where the element should be removed from. Possible values are "FRONT" or "BACK".
 * @param {Array} arr - The array from which the element should be removed.
 */
function removeFromArray(location, arr) {
  // Your code here
  switch (location) {
    case "FRONT":
      arr.shift();
      break;
    case "BACK":
      arr.pop();
      break;
    default:
      console.log("ERROR");
      break;
  }
}

testArray = [0, 1, 2, 3, 4];

removeFromArray("FRONT", testArray);
console.log(testArray); // [1,2,3,4]

removeFromArray("BACK", testArray);
console.log(testArray); // [1,2,3]

removeFromArray("MIDDLE", 4, testArray); // "ERROR"
console.log(testArray); // [1,2,3]
