// Your code here
/**
 * Adds two matrices together and returns the resulting matrix.
 *
 * @param {Array<Array<number>>} matrixA
 - The first matrix.
 * @param {Array<Array<number>>} matrixB - The second matrix.
 *
 * @returns {Array<Array<number>>} The resulting matrix.
 */
function matrixAddition(matrixA, matrixB) {
  const sumMatrix = [];
  for (let i = 0; i < matrixA.length; i++) {
    sumMatrix.push([]);
    for (let j = 0; j < matrixA[i].length; j++) {
      sumMatrix[i].push(matrixA[i][j] + matrixB[i][j]);
    }
  }
  return sumMatrix;
}

let matrixA = [[2,5], [4,7]]
let matrixB = [[9,1], [3,0]]
let matrixC = [[-1,0], [0,-1]]
let matrixD = [[2, -5], [7, 10], [0, 1]]
let matrixE = [[0 , 0], [12, 4], [6,  3]]

console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]