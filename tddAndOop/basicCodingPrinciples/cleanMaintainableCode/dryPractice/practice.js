function getExtrema(num1, num2, isSmaller = false) {
  return isSmaller ? (num1 < num2 ? num1 : num2) : (num1 > num2 ? num1 : num2);
}

function multiplyBiggerNumByTwo(num1, num2) {
  const bigNum = getExtrema(num1, num2);
  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  const bigNum = getExtrema(num1, num2);
  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  const bigNum = getExtrema(sum1, sum2);
  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  const smallDog = getExtrema(weight1, weight2, true);
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}



/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};