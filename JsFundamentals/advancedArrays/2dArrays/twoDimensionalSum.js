// your code here
/**
 * Calculates the sum of all elements in a two-dimensional array.
 *
 * @param {Array<Array<number>>} arr - The two-dimensional array.
 *
 * @returns {number} The sum of all elements in the array.
 */
function twoDimensionalSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
    }
    return sum;
}


let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6