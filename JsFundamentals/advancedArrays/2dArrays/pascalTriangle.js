// For example, here are the first 5 levels of Pascal's triangle:
//       1
//      1 1
//     1 2 1
//    1 3 3 1
//   1 4 6 4 1

// Your code here
/**
 * Calculates Pascal's triangle up to the specified number of levels.
 *
 * @param {number} n The number
 of levels to calculate.
 * @returns {number[][]} A 2D array representing Pascal's triangle.
 */
function pascalsTriangle(n) {
    let triangle = [[1]];

    while (triangle.length < n) {

        let row = [];
        let prevRow = triangle[triangle.length - 1];
        row.push(1);

        for (let i = 0; i < prevRow.length - 1; i++) {
            row.push(prevRow[i] + prevRow[i + 1]);
        }

        row.push(1);
        triangle.push(row);
    }

    return triangle;
}


console.log(pascalsTriangle(5));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]

console.log(pascalsTriangle(7));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1],
//     [1, 5, 10, 10, 5, 1],
//     [1, 6, 15, 20, 15, 6, 1]
// ]