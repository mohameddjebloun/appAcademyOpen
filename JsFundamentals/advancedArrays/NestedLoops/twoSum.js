// your code here
/**
 * Checks if there are two elements in the input array that sum up to the target value.
 *
 * @param {Array} arr
 - The input array.
 * @param {number} target - The target sum.
 *
 * @returns {boolean} True if there are two elements that sum up to the target value, false otherwise.
 */
function twoSum(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target){
                return true;
            }
        }
    }
    return false;
}





console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false