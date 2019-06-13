/**
 * Написать функцию, которая принимает массив целых чисел и возвращает новый массив,
 * каждый элемент которого увеличен на 1
 * 
 * 1. используя цикл for
 * 2. используя цикл while
 * 3. используя рекурсию
 * 4. используя map
 * 5. используя fold
 */

function forPlus1(xs) {
  const ys = []
  for (var i = 0; i < xs.length; i++) {
    ys[i] = xs[i] + 1
  }
  return ys
}

console.log("forPlus1", forPlus1([1, 2, 3]))

function whilePlus1(xs) {
  const ys = []
  var i = 0
  while(i < xs.length) {
    ys[i] = xs[i] + 1
    i = i + 1
  }
  return ys
}

console.log("whilePlus", whilePlus1([1, 2, 3]))

function recPlus1(xs) {

  function go(i, ys) {
    if (i >= xs.length) {
      return ys
    } else {
      ys[i] = xs[i] + 1
      return go(i + 1, ys)
    }
  }
  return go(0, [])
}

console.log("recResult", recPlus1([1, 2, 3]))
