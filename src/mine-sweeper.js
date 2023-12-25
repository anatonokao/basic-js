const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The mapult should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const map = matrix.reduce((acc, mine) => {
    mine = mine.map((bool, i) => (bool ? (mine[i] = 1) : (mine[i] = 0)));
    acc.push(mine);
    return acc;
  }, []);

  const res = [];
  for (let i = 0; i < map.length; i += 1) {
    res.push([]);
    for (let j = 0; j < map[i].length; j += 1) {
      let number = map[i][j];
      if (number === 1) {
        res[i].push(number);
        continue;
      }
      if (map[i - 1] !== undefined) {
        number =
          number +
          map[i - 1][j] +
          (map[i - 1][j - 1] ? map[i - 1][j - 1] : 0) +
          (map[i - 1][j + 1] ? map[i - 1][j + 1] : 0);
      }
      if (map[i + 1] !== undefined) {
        number =
          number +
          map[i + 1][j] +
          (map[i + 1][j - 1] ? map[i + 1][j - 1] : 0) +
          (map[i + 1][j + 1] ? map[i + 1][j + 1] : 0);
      }
      number =
        number +
        (map[i][j - 1] ? map[i][j - 1] : 0) +
        (map[i][j + 1] ? map[i][j + 1] : 0);
      res[i].push(number);
    }
  }
  return res;
}

module.exports = {
  minesweeper,
};
