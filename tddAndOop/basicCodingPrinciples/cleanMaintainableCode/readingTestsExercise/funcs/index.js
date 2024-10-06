const isOdd = (num) => {
  if (typeof num !== "number") {
    throw new Error("num is not a number");
  }
  return num % 2 !== 0;
};

const myRange = (min, max, step = 1) => {
  const arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
};

const isFive = (num) => {
  return num === 5;
};

module.exports = { isOdd, myRange, isFive };
