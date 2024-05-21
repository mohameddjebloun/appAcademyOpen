/**
 * Finds the maximum value in a given 2D matrix.
 *
 * @param {number[][]} matrix - The 2D matrix to search.
 * @returns {number} - The maximum value in the matrix.
 */
function maxInMatrix(matrix) {
    // your code here...
    let max = matrix[0][0];
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
        if(matrix[i][j] > max) {
          max = matrix[i][j];
        }
      }
    }
    return max;
  }
  
  
  matrix = [[11,  2,-99],
            [20, 19, 10],
            [47, 72, 56]]
  
  console.log(maxInMatrix(matrix)); // 72
  