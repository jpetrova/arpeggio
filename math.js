// Какая разность арифметической прогрессии 10, 5, 0, -5?

function sequenceStep(xs, n) {
  var a = xs[n]
  var b = xs[n - 1]
  var d = a - b  
  return d
}

console.log('sequenceStep([10, 5, 0, -5], 1) == -5 -> ' + (sequenceStep([10, 5, 0, -5], 1) == -5))
