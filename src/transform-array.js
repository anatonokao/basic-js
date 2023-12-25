const { NotImplementedError } = require("../extensions/index.js");

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
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  if (!arr.length) return [];
  const dictionary = [
    "--double-prev",
    "--double-next",
    "--discard-prev",
    "--discard-next",
  ];

  const res = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case dictionary[0]:
        if (res.at(-1) === arr[i - 1] && i - 1 > 0) res.push(arr[i - 1]);
        break;

      case dictionary[1]:
        if (i < arr.length - 1) res.push(arr[i + 1]);
        break;

      case dictionary[2]:
        if (res.at(-1) === arr[i - 1]) res.pop();
        break;

      case dictionary[3]:
        i++;
        break;

      default:
        res.push(arr[i]);
        break;
    }
  }
  return res;
}

module.exports = {
  transform,
};
