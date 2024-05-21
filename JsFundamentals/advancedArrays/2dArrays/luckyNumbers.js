/**
 * Checks if a given number is the maximum value in a given column of a 2D matrix.
 *
 * @param {number} number - The number to check.
 * @param {number[][]} matrix - The column of the matrix to check.
 * @param {number} colIndex - The index of the column to check.
 * @returns {boolean} - True if the number is the maximum value in the column, false
 otherwise.
 */
function isMaxInColumn(number, matrix, colIndex) {
    let max = matrix[0][colIndex];
    for (let i = 1; i < matrix.length; i++) {
      if (matrix[i][colIndex] > max) {
        max = matrix[i][colIndex];
      }
    }
    return number === max;
}

/**
 * Checks if a given number is the minimum value in a given row of a 2D matrix.
 *
 * @param {number} number - The number to check.
 * @param {number[]} row - The row of the matrix to check.
 * @returns {boolean} - True if the number is the minimum value in the row, false otherwise.
 */
function isMinInRow(number, row) {
    let min = row[0];
    for (let i = 1; i < row.length; i++) {
      if (row[i] < min) {
        min = row[i];
      }
    }
    return number === min;
}

/**
 * Finds the lucky numbers in a 2D matrix.
 *
 * A lucky number is a number that is the maximum value in its column and the minimum value in its row.
 *
 * @param {number[][]} matrix - The 2D matrix to search.
 * @returns {number[]} - An array of lucky numbers.
 */
function luckyNumbers(matrix) {
    // your code here...
    let luckyNumbers = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (isMaxInColumn(matrix[i][j],matrix, j) && isMinInRow(matrix[i][j], matrix[i])) {
            luckyNumbers.push(matrix[i][j]);
          }
        }
      }
    return luckyNumbers;

  }
  
  
  matrix = [[ 5,  9, 21],
            [ 9, 19,  6],
            [12, 14, 15]]
  
  console.log(luckyNumbers(matrix)); // [12]
  
  matrix = [[ 5, 10,  8,  6],
            [10,  2,  7,  9],
            [21, 15, 19, 10]]
  
  console.log(luckyNumbers(matrix)); // [10]
  