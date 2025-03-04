const { NotImplementedError } = require("../extensions/index.js");

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
  let res = 0;
  let arr = String(n).split("");
  for (let i = 0; i < arr.length; i++) {
    if (String(n).replace(arr[i], "") > res)
      res = String(n).replace(arr[i], "");
  }
  return +res;
}

module.exports = {
  deleteDigit,
};
