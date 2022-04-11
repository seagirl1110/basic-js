const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) return {};
  const coll = domains.map(domain => domain.split('.'));
  let max = coll[0];
  for (let i = 1; i < coll.length; i += 1) {
    const curr = coll[i];
    if (curr.length > max.length) {
      max = curr;
    }
  }
  const size = max.length - 1;
  const result = {};
  let name = '';
  for (let i = 0; i <= size; i += 1) {
    let el = max[size - i];
    name +=  `.${el}`; 
    let count = 0;
    coll.forEach(arr => {
      if (arr.includes(el)) {
        count += 1;
      }
    })
    result[name] = count;
  }
  return result;
}

module.exports = {
  getDNSStats
};
