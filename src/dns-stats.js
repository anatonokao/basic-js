const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  const arr = domains.map((item) => item.split(".").reverse());
  arr.forEach((domain) => {
    let key = "." + domain[0];
    for (let i = 0; i < domain.length; i += 1) {
      res.hasOwnProperty(key) ? (res[key] += 1) : (res[key] = 1);
      key += "." + domain[i + 1];
    }
  });
  return res;
}

module.exports = {
  getDNSStats,
};
