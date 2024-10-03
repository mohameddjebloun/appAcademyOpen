const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numAttempts;
let min;
let max;
let secretNumber;

function randomInRange(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function askLimit() {
  rl.question("Enter a limit: ", handleLimit);
}

const askRange = (answer) => {
  max = Number(answer);
  rl.question("Enter a min number: ", handleMin);
};

function askGuess() {
  numAttempts--;
  if (numAttempts === 0) {
    console.log("You ran out of guesses");
    rl.close();
    return false;
  }
  rl.question("What is your guess? ", (answer) => {
    if (checkGuess(Number(answer))) {
      rl.close();
    } else {
      askGuess();
    }
  });
}
function checkGuess(guess) {
  if (guess < secretNumber) {
    console.log("Too low");
    return false;
  } else if (guess > secretNumber) {
    console.log("Too high");
    return false;
  } else {
    console.log("Correct!");
    return true;
  }
}
const handleLimit = (answer) => {
  numAttempts = Number(answer);
  rl.question("Enter a max number: ", askRange);
};

const handleMax = (answer) => {
  max = Number(answer);
  rl.question("Enter a min number: ", handleMin);
};
const handleMin = (answer) => {
  min = Number(answer);
  console.log(`I'm thinking of a number between ${min} and ${max}`);
  secretNumber = randomInRange(min, max);
  rl.question("What is your guess? ", handleGuess);
};
const handleGuess = (answer) => {
  if (checkGuess(Number(answer))) {
    rl.close();
  } else {
    askGuess();
  }
};

askLimit();
