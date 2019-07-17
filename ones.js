const List = require('./list').List
const ListOps = require('./list').ListOps

/**
 * На вход подается число. Необходимо преобразовать ее в двоичный код
 * и посчитать количество единиц. Последовательность всегда целочисленная.
 * Пример:
 * 1234 -> '10011010010' количество единиц = 5
 */

function ones(n) {
  const str = n.toString(2)
  const cs = List.fromString(str)
  const xs = ListOps.map(cs, x => parseInt(x, 10))
  return ListOps.foldLeft(xs, 0, (acc, x) => acc + x)
}

module.exports = ones
