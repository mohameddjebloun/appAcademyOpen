/**
 * Given a 2D matrix, return the elements of the matrix in spiral order.
 *
 * @param {Array<Array<number>>} matrix - The 2D matrix.
 *
 * @returns {Array<number>} The elements of the matrix in spiral order.
 */
function spiralOrder(matrix) {
    // your code here...
    let spiralMatrix = [];
    // Initialize the boundaries of the matrix.
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    // While the boundaries are valid, traverse the matrix in a spiral order.
    while(top <= bottom && left <= right) {

        //Traverse right
        for(let i = left; i <= right; i++) {
            spiralMatrix.push(matrix[top][i]);
        }
        top++;

        //Traverse down
        for(let i = top; i <= bottom; i++) {
            spiralMatrix.push(matrix[i][right]);
        }
        right--;

        //Traverse left
        if(top <= bottom) {
            for(let i = right; i >= left; i--) {
                spiralMatrix.push(matrix[bottom][i]);
            }
            bottom--;
        }

        //Traverse up
        if(left <= right) {
            for(let i = bottom; i >= top; i--) {
                spiralMatrix.push(matrix[i][left]);
            }
            left++;
        }
    }
    
    return spiralMatrix;
    }
  
  matrix = [[ 1, 2, 3],
            [ 4, 5, 6],
            [ 7, 8, 9]]
  
  console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]
  
  matrix = [[1, 2, 3, 4],
            [5, 6, 7, 8],
            [9,10,11,12]]
  
  
  console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]