// For example, given 2, 3, 7, 5, 9 as the base, we should construct this pyramid:
//
//           85
//         37  48
//       15  22  26
//    5   10   12   14
//  2   3    7    5    9
//
//
// Your code here
/**
 * Constructs a pyramid array from a given base array.
 *
 * A pyramid array is a 2D array where each row
 is the sum of the two adjacent elements in the row below it.
 *
 * @param {number[]} base - The base array of the pyramid.
 * @returns {number[][]} The constructed pyramid array.
 */
function pyramidArray(base) {

    let pyramid = [base];

    for (let i = 1; i < base.length; i++) {

        let row = [];
        let prevRow = pyramid[0];

        for (let j = 0; j < prevRow.length - 1; j++) {

            let value = prevRow[j] + prevRow[j + 1];
            row.push(value);
        }

        pyramid.unshift(row);
    }

    return pyramid;
}



let p1 = pyramidArray([2, 3, 7, 5, 9]);
console.log(p1);
// [
//   [ 85 ],
//   [ 37, 48 ],
//   [ 15, 22, 26 ],
//   [ 5, 10, 12, 14 ],
//   [ 2, 3, 7, 5, 9 ]
// ]

let p2 = pyramidArray([2, 2, 2, 2]);
console.log(p2);
// [
//   [ 16 ],
//   [ 8, 8 ],
//   [ 4, 4, 4 ],
//   [ 2, 2, 2, 2 ]
// ]