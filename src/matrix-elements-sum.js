const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const row = matrix.length;
  const column = matrix[0].length;
  let i = 0;
  let j = 0
  while (j < column && i <= row) {
    if (i === row) {
      if (j === column - 1) {
        break;
      }
      i = 0;
      j += 1;
    }
    const current = matrix[i][j];
    if (current === 0) {
      j += 1;
      i = 0;
    } else {
      sum += current;
      i += 1;
    }
  }
  return sum;
}



module.exports = {
  getMatrixElementsSum
};
