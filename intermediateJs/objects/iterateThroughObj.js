function printObject(obj) {
  // your code here...
  for (entry in obj) {
    console.log(`${entry} - ${obj[entry]}`);
  }
}

let bootcamp = {
  name: "App Academy",
  color: "Red",
  population: 120,
};

printObject(bootcamp); // prints
// name - App Academy
// color - Red
// population - 120
