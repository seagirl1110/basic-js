const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  'arr': [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    let chainLink = `( ${value} )`
    if (value === undefined) {
      chainLink = `( )`;
    }
    this.arr.push(chainLink);
    return chainMaker;
  },
  removeLink(position) {
    if (typeof(position) !== 'number' || position <= 0 || position > this.getLength()) {
      this.arr = [];
      throw new Error(`You can't remove incorrect link!`);
    } else {
      this.arr.splice(position - 1, 1);
      return chainMaker;
    }
  },
  reverseChain() {
    this.arr.reverse();
    return chainMaker;
  },
  finishChain() {
    const finish = this.arr.join('~~');
    this.arr = [];
    return finish;
  }
};

module.exports = {
  chainMaker
};
