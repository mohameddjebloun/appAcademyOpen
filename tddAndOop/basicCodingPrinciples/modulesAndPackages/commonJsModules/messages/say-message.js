const helloMessage = require("./hello-message");
function sayMessage(message) {
  console.log(`"${message}"`);
}

sayMessage(helloMessage.helloMessage);
module.exports.sayMessage = sayMessage;
