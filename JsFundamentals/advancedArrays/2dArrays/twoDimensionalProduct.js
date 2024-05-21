// your code here
/**
 * Calculates the product of all elements in a two-dimensional array.
 *
 * @param {number[][]} arr - The two
-dimensional array.
 *
 * @returns {number} The product of all elements in the array.
 */
function twoDimensionalProduct(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}




let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2)); // 88