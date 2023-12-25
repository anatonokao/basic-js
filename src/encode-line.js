const { NotImplementedError } = require("../extensions/index.js");

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
  let counter = 1;
  let res = "";
  str.split("").forEach((s, index, arr) => {
    if (s === arr[index + 1]) counter += 1;
    else {
      res = res + `${counter === 1 ? "" : counter}${s}`;
      counter = 1;
    }
  });
  return res;
}

module.exports = {
  encodeLine,
};
