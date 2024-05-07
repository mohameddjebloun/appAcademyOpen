// Your code here
let divisorsNumber = function (number) {
  let divisors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  return divisors.length;
};
let isAntiPrime = function (number) {
  for (let i = 1; i < number; i++) {
    if (divisorsNumber(number) < divisorsNumber(i)) {
      return false;
    }
  }
  return true;
};
console.log(isAntiPrime(24)); // true
console.log(isAntiPrime(36)); // true
console.log(isAntiPrime(48)); // true
console.log(isAntiPrime(360)); // true
console.log(isAntiPrime(1260)); // true
console.log(isAntiPrime(27)); // false
console.log(isAntiPrime(5)); // false
console.log(isAntiPrime(100)); // false
console.log(isAntiPrime(136)); // false
console.log(isAntiPrime(1024)); // false
