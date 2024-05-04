// Your code here
function moreDotLessDash(str) {
  let dotCount = 0;
  let dashCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-") {
      dashCount += 1;
    } else if (str[i] === ".") {
      dotCount += 1;
    }
  }
  return dotCount > dashCount;
}
console.log(moreDotLessDash("2-D arrays are fun. I think.")); // true
console.log(moreDotLessDash("Morse code is great.")); // true
console.log(moreDotLessDash(".... . -.--")); // true
console.log(moreDotLessDash(".--. .-. --- --. .-. .- -- -- . .-.")); // false
console.log(moreDotLessDash("high-flying acrobat.")); // false
