function sayHello(name) {
  let msg = "Hello, " + name + ". How are you?";
  return msg;
}

function greetMorning() {
  return "Good morning! Have a great day!";
}

function greetAfternoon() {
  return "Good afternoon! Hope you're having a wonderful day!";
}

function greetEvening() {
  return "Good evening! Wishing you a pleasant evening!";
}

function calculateArea(length, width) {
  let area = length * width;
  return "The area of the rectangle is " + area + " square units.";
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function isEven(number) {
  return number % 2 === 0;
}

function isPalindrome(word) {
  let reversed = word.split("").reverse().join("");
  return word === reversed;
}

function greetUser(firstName, lastName) {
  return "Hello, " + firstName + " " + lastName + "! Welcome!";
}

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

console.log(sayHello("world"));
console.log(greetMorning());
console.log(greetAfternoon());
console.log(greetEvening());
console.log(calculateArea(5, 7));
console.log("Random number:", generateRandomNumber());
console.log("Is 6 even?", isEven(6));
console.log("Is 'radar' a palindrome?", isPalindrome("radar"));
console.log(greetUser("John", "Doe"));
console.log("capitalized:", capitalizeFirstLetter("hello"));
