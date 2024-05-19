function spiralOrder(matrix) {
    // your code here...
    // Initialize an empty spiralMatrix array
    let spiralMatrix = [];
    /*push the first row, then the last column without the first element then the last row without the last element then 
    the second row without the last element and so on*/
    let i = 0;
    let j = 0;
    
        // push the first row
        for(let k = j; k < matrix[0].length; k++) {
            spiralMatrix.push(matrix[i][k]);
        }
        // push the last column
        for(let k = i + 1; k < matrix.length; k++) {
            spiralMatrix.push(matrix[k][matrix[0].length - 1]);
        }
        // push the last row
        for(let k = matrix[0].length - 2; k >= j; k--) {
            spiralMatrix.push(matrix[matrix.length - 1][k]);
        }
        // push the second row without its last element
        for(let k = 0; k < matrix[0].length - 1; k++) {
            spiralMatrix.push(matrix[1][k]);
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