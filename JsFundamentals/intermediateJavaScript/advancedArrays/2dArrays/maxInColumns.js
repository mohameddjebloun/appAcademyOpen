/**
 * Finds the maximum value in each column of a 2D matrix.
 *
 * @param {number[][]} matrix -
 The 2D matrix to search.
 * @returns {number[]} - An array containing the maximum value in each column.
 */
 function maxColumn(matrix) {
    // Get the number of columns in the matrix.
    const numCols = matrix[0].length;
    let maxValues = [];
    // Iterate through the columns of the matrix.
    for (let j = 0; j < numCols; j++) {
        let maxValue = matrix[0][j];
        // Iterate through the rows of the current column.
        for (let i = 1; i < matrix.length; i++) {
            if (matrix[i][j] > maxValue) {
                maxValue = matrix[i][j];
            }
        }
        maxValues.push(maxValue);
    }
    return maxValues;
}
  
  
  matrix = [[ 5,  9, 21],
            [ 9, 19,  6],
            [12, 14, 15]]
  
  console.log(maxColumn(matrix)); // [12, 19, 21]
  
  