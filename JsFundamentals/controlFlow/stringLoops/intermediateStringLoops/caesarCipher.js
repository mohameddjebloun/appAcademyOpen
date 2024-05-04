// Feel free to use this variable:
// const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, num) {
  // your code here
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let index = alphabet.indexOf(string[i]);
    if (index === alphabet.length - 1) {
      newString += alphabet[0 + num - 1];
    } else {
      newString += alphabet[index + num];
    }
  }
  return newString;
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"
