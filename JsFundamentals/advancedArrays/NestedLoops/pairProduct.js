// your code here
/**
 * Checks if there are two elements in the input array whose product is equal to the target product.
 *
 * @param {Array} arr - The input array.
 * @param {number} product - The target product.
 *
 * @returns {boolean} True if there are two elements whose product is equal to the target product, false otherwise.
 */
function pairProduct(arr, product) {
    for(let i = 0; i < arr.length; i++) {
        
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] * arr[j] === product){
                return true;
            }
        }
    }
    return false;
}



console.log(pairProduct([4, 2, 5, 8], 16))    // true
console.log(pairProduct([8, 1, 9, 3], 8))     // true
console.log(pairProduct([3, 4], 12))          // true
console.log(pairProduct([3, 4, 6, 2, 5], 12)) // true
console.log(pairProduct([4, 2, 5, 7], 16))    // false
console.log(pairProduct([8, 4, 9, 3], 8))     // false
console.log(pairProduct([3], 12))             // false