const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const row = matrix.length;
  const column = matrix[0].length;
  const coll = [];
  for (let i = 0; i < row; i += 1) {
    const item = matrix[i].map(el => {
      if (el === true) {
        el = 1;
      } else { el = 0 }
      return el
    });
    coll.push(item)
  }

  const mine = [];
  for (let i = 0; i < row; i += 1) {
    const item = coll[i].map((el, j) => {
      if (i === 0) {
        if (j === 0) {
          el = coll[i][j + 1] + coll[i + 1][j] + coll[i + 1][j + 1];
        }
        if (j > 0 && j < column - 1) {
          el = coll[i][j - 1] + coll[i][j + 1] + coll[i + 1][j] + coll[i + 1][j - 1] + coll[i + 1][j + 1];
        }
        if (j === column - 1) {
          el = coll[i][j - 1] + coll[i + 1][j] + coll[i + 1][j - 1];
        }
      }
      if (i > 0 && i < row - 1) {
        if (j === 0) {
          el = coll[i][j + 1] + coll[i - 1][j] + coll[i + 1][j] + coll[i - 1][j + 1] + coll[i + 1][j + 1];
        }
        if (j > 0 && j < column - 1) {
          el = coll[i][j - 1] + coll[i][j + 1] + coll[i - 1][j] + coll[i + 1][j] + coll[i - 1][j - 1] + coll[i + 1][j - 1] + coll[i - 1][j + 1] + coll[i + 1][j + 1];
        }
        if (j === column - 1) {
          el = coll[i][j - 1] + coll[i - 1][j] + coll[i + 1][j] + coll[i - 1][j - 1] + coll[i + 1][j - 1];
        }
      }
      if (i === row - 1) {
        if (j === 0) {
          el = coll[i][j + 1] + coll[i - 1][j] + coll[i - 1][j + 1];
        }
        if (j > 0 && j < column - 1) {
          el = coll[i][j - 1] + coll[i][j + 1] + coll[i - 1][j] + coll[i - 1][j - 1] + coll[i - 1][j + 1];
        }
        if (j === column - 1) {
          el = coll[i][j - 1] + coll[i - 1][j] + coll[i - 1][j - 1];
        }
      }
      return el
    });
    mine.push(item)
  }

  return mine;
}

module.exports = {
  minesweeper
};
