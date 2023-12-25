const { NotImplementedError } = require("../extensions/index.js");

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
  const addition =
    options.addition || options.addition === false || options.addition === null
      ? String(options.addition)
      : "";

  const secondString = Array(options.additionRepeatTimes)
    .fill(addition)
    .join(options.additionSeparator || "|");

  return Array(options.repeatTimes)
    .fill(str + secondString)
    .join(options.separator || "+");
}

module.exports = {
  repeater,
};
