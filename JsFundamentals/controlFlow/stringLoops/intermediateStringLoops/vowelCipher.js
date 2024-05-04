function vowelCipher(string) {
  // your code here
  const vowels = ["a", "e", "i", "o", "u"];
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      if (string[i] === "u") {
        newString += "a";
      } else {
        newString += vowels[vowels.indexOf(string[i]) + 1];
      }
    } else {
      newString += string[i];
    }
  }
  return newString;
}

console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"
