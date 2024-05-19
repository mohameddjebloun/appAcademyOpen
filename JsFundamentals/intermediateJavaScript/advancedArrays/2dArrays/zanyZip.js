// Your code here
/**
 * This function takes two numbers as arguments and returns the larger of the two.
 *
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} - The larger of the two numbers.
 */
function maxNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
/**
 * This function takes two arrays and returns a new array with elements that are pairs of corresponding elements from the two arrays.
 * If one array is longer than the other, the shorter array is padded with null values.
 *
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} A new array with pairs of elements from the two arrays
.
 */
function zanyZip(arr1, arr2) {
    let result = [];
    for (let i = 0; i < maxNumber(arr1.length, arr2.length); i++) {
        result.push([arr1[i] || null, arr2[i] || null]);
    }
    return result;
}


console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]