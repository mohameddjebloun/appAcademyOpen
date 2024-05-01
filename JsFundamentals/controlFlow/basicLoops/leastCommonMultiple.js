// your code here
function leastCommonMultiple(num1, num2) {
  const maxNum = Math.max(num1, num2);
  let lcm = maxNum;
  while (true) {
    if (lcm % num1 === 0 && lcm % num2 === 0) {
      return lcm;
    }
    lcm += maxNum;
  }
}
console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10
