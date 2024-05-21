// your code here
/**
 * Counts the number of pairs of elements in the input array whose sum is equal to zero.
 *
 * @param {Array} numbers - The input array.
 *
 * @returns {number} The number of pairs of elements whose sum is equal to zero.
 */
function strangeSums(numbers) {
    let count = 0;
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] === 0) {
                count++;
            }
        }
    }
    return count;
            }

console.log(strangeSums([2, -3, 3, 4, -2]));     // 2
console.log(strangeSums([42, 3, -1, -42]));      // 1
console.log(strangeSums([-5, 5]));               // 1
console.log(strangeSums([19, 6, -3, -20]));      // 0
console.log(strangeSums([9]));                   // 0