const sayMessage = require("../messages/say-message").sayMessage;

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`);
}

sayHelloTo("Woody");
module.exports.sayHelloTo = sayHelloTo;
