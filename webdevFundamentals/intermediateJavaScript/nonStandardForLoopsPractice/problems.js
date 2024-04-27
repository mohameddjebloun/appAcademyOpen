function oddIndices(arr) {
  // Return an array containing all the odd indices in the array
  const newArr = [];
  for (let i = 1; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function oddReverse(arr) {
  // Return an array containing all the odd indices starting from the end
  const newArr = [];
  for (let i = 1; i < arr.length; i += 2) {
    newArr.unshift(arr[i]);
  }
  return newArr;
}

function secondPower(arr) {
  // Return an array containing all indices that are powers of 2
  const newArr = [];
  for (let i = 1; i < arr.length; i *= 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function nthPower(arr, n) {
  // Return an array containing all indices that are powers of n
  const newArr = [];
  for (let i = 1; i < arr.length; i *= n) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function firstHalf(arr) {
  // Return an array containing the first half of an array
  // Include middle index on odd length arr
  const newArr = [];
  for (let i = 0; i < arr.length / 2; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function secondHalf(arr) {
  // Return an array containing the second half of an array
  // Exclude middle index on odd length arr
  const length = arr.length;
  const halfIndex = Math.floor(length / 2);
  if (length === 0) {
    return [];
  } else if (length % 2 === 0) {
    return arr.slice(halfIndex);
  } else {
    return arr.slice(halfIndex + 1);
  }
}

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf,
};
