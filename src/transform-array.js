const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {throw new Error (`'arr' parameter must be an instance of the Array!`)}
  const coll = [];
  let i = 0; 
  while(i < arr.length) {
    const curr = arr[i];
    if (curr === '--discard-next') i += 1;
    else if (curr === '--discard-prev') {
        const prev = arr[i - 1];
        if (coll[coll.length - 1] === prev) coll.pop()
    }
    else if (curr === '--double-next') {
      const next = arr[i + 1];
      if (next !== undefined) coll.push(next)
    }
    else if (curr === '--double-prev') {
      const prev = arr[i - 1];
      if (coll[coll.length - 1] === prev && prev !== undefined) coll.push(prev)
    }
    else coll.push(curr);
    i += 1;
  }
  return coll;
}

module.exports = {
  transform
};
