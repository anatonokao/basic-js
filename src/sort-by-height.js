const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexes = [];
  arr.forEach((item, index) => {
    item === -1 && indexes.push(index);
  });
  arr = arr.filter((item) => item !== -1);
  arr.sort((a, b) => a - b);
  indexes.forEach((index) => arr.splice(index, 0, -1));
  return arr;
}

module.exports = {
  sortByHeight,
};
