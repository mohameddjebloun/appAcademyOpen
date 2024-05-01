function printFives(max) {
  /*let i = 0;
    while (i < max) {
      console.log(i);
      i += 5;
    }*/
  for (let i = 0; i < max; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}
// Example:

printFives(20); // prints out:
// 0
// 5
// 10
// 15
