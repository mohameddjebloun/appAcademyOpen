// your code here
function fizzBuzz(max) {
  let numbers = [];
  for (let i = 0; i < max; i++) {
    let isDivisibleByThree = i % 3 === 0 && i % 5 !== 0;
    let isDivisibleByFive = i % 3 !== 0 && i % 5 === 0;
    if (isDivisibleByThree || isDivisibleByFive) {
      numbers.push(i);
    }
  }
  return numbers;
}

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]