function fibonacci(length) {
  // your code here
  if (length === 1) {
    return [1];
  } else if (length === 0) {
    return [];
  } else {
    let sequence = [1, 1];
    for (let i = 2; i < length; i++) {
      let nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }
    return sequence;
  }
}

console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]
