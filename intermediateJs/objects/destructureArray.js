let bigArray = ["apple", 14, 32, 100, { name: "party" }, ["pineapple"]];
let [firstEl, secondEl, thirdEl, fourthEl, fifthEl, sixthEl] = bigArray;
console.log(firstEl, secondEl, thirdEl, fourthEl, fifthEl, sixthEl); // prints [apple, 14, 32, 100, { name: "party" }, ["pineapple"]]
// Example:
// let [firstEl] = bigArray;
// console.log(firstEl) // prints "apple"
