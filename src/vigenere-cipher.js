const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(type) {
    this.type = type;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    while (key.length < message.length) {
      key += key;
    }
    let text = message.toUpperCase();
    let keyArr = key.toUpperCase().split('');
    let arr = [];
    let codeA = 'A'.charCodeAt(0)
    for (let i = 0; i < text.length; i += 1) {
      if (text.charCodeAt(i) > 64 && text.charCodeAt(i) < 91) {
        const current = text.charCodeAt(i) - codeA;
        const shift = keyArr[0].charCodeAt(0) - codeA;
        keyArr.shift();
        const el = String.fromCharCode(codeA + (current + shift) % 26);
        arr.push(el);
      } else {
        arr.push(text[i]);
      }
    }

    if (this.type === false) {
      return arr.reverse().join('');
    }
    return arr.join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    while (key.length < message.length) {
      key += key;
    }
    let text = message.toUpperCase();
    let keyArr = key.toUpperCase().split('');
    let arr = [];
    let codeA = 'A'.charCodeAt(0)
    for (let i = 0; i < text.length; i += 1) {
      if (text.charCodeAt(i) > 64 && text.charCodeAt(i) < 91) {
        const current = text.charCodeAt(i) - codeA;
        const shift = keyArr[0].charCodeAt(0) - codeA;
        keyArr.shift();
        const el = String.fromCharCode(codeA + (current - shift + 26) % 26);
        arr.push(el);
      } else {
        arr.push(text[i]);
      }
    }

    if (this.type === false) {
      return arr.reverse().join('');
    }
    return arr.join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
