const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = '';
  let i = 0;
  while (i < str.length) {
    const curr = str[i];
    let count = 1;
    let next = str[i + count];
    while (curr === next) {
      count += 1;
      next = str[i + count];
    }
    i += count;
    if (count > 1) {
      newStr += `${count}`;
    }
    newStr += `${curr}`;
  }
  return newStr;
}

module.exports = {
  encodeLine
};
