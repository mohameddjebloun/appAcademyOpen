// Your code here
/**
 * Takes two arrays and returns a new array with elements that are pairs of corresponding elements from the two arrays.
 *
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} A new array with pairs of elements from the two arrays.
 */
function zip(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push([arr1[i], arr2[i]]);
    }
    return result;
}


console.log(zip([1, 2, 3, 4], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

console.log(zip(['eins', 'zwei', 'drei'], [1, 2, 3]));
// [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

console.log(zip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]