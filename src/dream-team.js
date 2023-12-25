const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members) || !members) return "";
  return members
    .filter((el) => typeof el === "string")
    .map((el) => el.trim().toUpperCase())
    .sort()
    .reduce(
      (acc, el) =>
        typeof el === "string" ? acc + el.replaceAll(" ", "")[0] : acc,
      ""
    );
}

module.exports = {
  createDreamTeam,
};
