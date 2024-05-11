/**
 * Adds an element to an array at the specified location.
 * @param {string} location - The location where the element should be added. Can be "FRONT" or "BACK".
 * @param {*} element - The element to be added to the array.
 * @param {Array} arr - The array to which the element should be added.
 */
function addToArray(location, element, arr) {
  switch (location) {
    case "FRONT":
      arr.unshift(element);
      break;
    case "BACK":
      arr.push(element);
      break;
    default:
      console.log("ERROR");
      break;
  }
}

testArray = [1, 2, 3];

addToArray("FRONT", 0, testArray);
console.log(testArray); // [0,1,2,3]

addToArray("BACK", 4, testArray);
console.log(testArray); // [0,1,2,3,4]

addToArray("MIDDLE", 4, testArray); // "ERROR"
console.log(testArray); // [0,1,2,3,4]
