// your code here
function maxVal(num1, num2) {
    if(num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function leastCommonMultiple(num1, num2) {
    const maxNum = maxVal(num1, num2);
    let lcm = maxNum;
    while(true) {
        if(lcm % num1 === 0 && lcm % num2 === 0) {
            return lcm;
        }
        lcm++;
    }
}

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10