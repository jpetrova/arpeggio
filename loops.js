/* Написать функцию, которая принимает массив целых чисел и возвращает новый массив,
каждый элемент которого увеличен на 1
1 используя цикл for
2 используя цикл while
3 используя рекурсию
4 используя map
5 используя fold */


function forPlus1(xs) {
  const ys = []
  for (var i = 0; i < xs.length; i++) {
    ys[i] = xs[i] + 1
  }
  return ys
}

const result1 = forPlus1([1, 2, 3])
console.log("forPlus1", result1)

function whilePlus1(xs) {
  const ys = []
  var i = 0
  while(i < xs.length) {
    const v = xs[i]
    ys[i] = v + 1
    i = i + 1
  }
  return ys
}

const whileResult = whilePlus1([1, 2, 3])
console.log("whilePlus", whileResult)

function recPlus1(xs) {

  function go(i, ys) {
    if (i >= xs.length) {
      return ys
    } else {
      const v = xs[i]
      ys[i] = v + 1
      return go(i + 1, ys)
    }
  }
  const result = go(0, [])
  return result
}

const recResult = recPlus1([1, 2, 3])
console.log("recResult", recResult)
