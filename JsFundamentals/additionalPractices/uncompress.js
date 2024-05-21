// your code here
function uncompress(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i += 2) {
    for (let j = 0; j < Number(str[i + 1]); j++) {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(uncompress("x3y4z2")); // 'xxxyyyyzz'
console.log(uncompress("a5b2c4z1")); // 'aaaaabbccccz'
console.log(uncompress("b1o2t1")); // 'boot'
