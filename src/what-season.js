const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if (!(date instanceof Date) || date.hasOwnProperty("getMonth"))
    throw new Error("Invalid date!");
  try {
    const seasons = ["winter", "spring", "summer", "autumn"];
    if (date.getMonth() > 10 || date.getMonth() < 2) return seasons[0];
    if (date.getMonth() > 1 && date.getMonth() < 5) return seasons[1];
    if (date.getMonth() > 4 && date.getMonth() < 8) return seasons[2];
    if (date.getMonth() > 7 && date.getMonth() < 11) return seasons[3];
  } catch {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
