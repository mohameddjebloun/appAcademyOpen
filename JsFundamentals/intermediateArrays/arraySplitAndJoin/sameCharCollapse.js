/**
 * Collapses adjacent characters in a string that are the same.
 *
 * @param {string} str - The input string.
 * @returns {string} The collapsed string.
 */
function sameCharCollapse(str) {
  let collapsedStr = str;
  let i = 0;
  while (i < collapsedStr.length) {
    let sameAdjacentLetters = collapsedStr[i] === collapsedStr[i + 1];
    if (sameAdjacentLetters) {
      collapsedStr =
        collapsedStr.substring(0, i) +
        collapsedStr.substring(i + 2, collapsedStr.length);
      i = 0;
    }
    i++;
  }
  return collapsedStr;
}

console.log(sameCharCollapse("zzzxaaxy")); // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
