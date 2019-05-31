// площадь треугольника

function triangleArea(a, h) {
  var s = a / 2 * h
  return s
}

var x = triangleArea(3, 4)
console.log(x == 6)

// В треугольнике сумма двух равных углов больше третьего на 6 градусов. Найдите больший угол треугольника

function largeAngle(n) {
  var sum = 180
  var b = sum - n
  var x = b / 2
  return x
}

console.log('largeAngle(6) == 87 -> ' + (largeAngle(6) == 87))
