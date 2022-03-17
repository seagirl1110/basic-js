const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newStr = String(str);
  if (options.addition !== undefined) {
    const addStr = String(options.addition);
    const addColl = [addStr];
    for (let j = 2; j <= options.additionRepeatTimes; j += 1) {
      addColl.push(addStr);
    }
    newStr += addColl.join(options.additionSeparator || '|');
  }
  const coll = [newStr];
  for (let i = 2; i <= options.repeatTimes; i += 1) {
    coll.push(newStr)
  }
  return coll.join(options.separator || '+')
}

module.exports = {
  repeater
};
