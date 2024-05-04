// Your code here
function hasThreeVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let includedVowels = [];
  let vowelsCount = 0;
  for (let i = 0; i < vowels.length; i++) {
    if (str.includes(vowels[i]) && !includedVowels.includes(str[i])) {
      includedVowels.push(str[i]);
      vowelsCount += 1;
    }
  }
  return vowelsCount >= 3;
}
console.log(hasThreeVowels("delicious")); //  true
console.log(hasThreeVowels("bootcamp prep")); //  true
console.log(hasThreeVowels("bootcamp")); //  false
console.log(hasThreeVowels("dog")); //  false
console.log(hasThreeVowels("go home")); //  false
