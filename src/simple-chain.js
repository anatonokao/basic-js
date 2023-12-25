const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position > this.chain.length - 1 ||
      position - 1 < 0
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain = this.chain
      .slice(0, position - 1)
      .concat(this.chain.slice(position));
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.chain.join("~~");
    this.chain = [];
    return res;
  },
};

module.exports = {
  chainMaker,
};
