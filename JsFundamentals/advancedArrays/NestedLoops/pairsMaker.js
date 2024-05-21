// your code here
/**
 * Creates pairs of elements from an array.
 *
 * @param {Array} arr - The array to create pairs from.
 * @returns {Array} An array of pairs.
 */
function pairsMaker(arr) {
    // Initialize an empty array to store the pairs
    let pairs = [];
    // Iterate over the array
    for(let i = 0; i < arr.length; i++) {
        // Iterate over the array starting from the next element after the current element
        for(let j = i + 1; j < arr.length; j++) {
            // Push the pair of elements into the pairs array
            pairs.push([arr[i], arr[j]]);
        }
    }
    // Return the pairs array
    return pairs;
}





console.log(pairsMaker(['a', 'b', 'c', 'd'])); // =>
// [ [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'a', 'd' ],
//   [ 'b', 'c' ],
//   [ 'b', 'd' ],
//   [ 'c', 'd' ] ]

console.log(pairsMaker(['Rosemary', 'Alex', 'Connor'])); // =>
// [ [ 'Rosemary', 'Alex' ],
//   [ 'Rosemary', 'Connor' ],
//   [ 'Alex', 'Connor' ] ]