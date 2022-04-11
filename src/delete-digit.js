const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  console.log(n);
  const str = n.toString();
  console.log(str);
  const coll = [];
  for (let i = 0; i < str.length; i += 1) {
    coll.push(Number(str.slice(0, i) + str.slice(i + 1)));
  }
  console.log(coll);
  return Math.max(...coll);
}

module.exports = {
  deleteDigit
};
