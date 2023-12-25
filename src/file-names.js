const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const res = {};
  names.forEach((item) => {
    res.hasOwnProperty(item) ? (res[item] += 1) : (res[item] = 1);
  });
  return names
    .reverse()
    .map((item) => {
      res[item] -= 1;
      if (item.includes("(1)")) return (item += "(1)");
      else return (item += res[item] ? `(${res[item]})` : "");
    })
    .reverse();
}

module.exports = {
  renameFiles,
};
