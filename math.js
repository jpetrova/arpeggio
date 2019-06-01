// Какая разность арифметической прогрессии 10, 5, 0, -5?

// ([4, 2]) -> [2]
// ([4]) -> []
function sequenceStep(xs) {
  if (xs.length < 2) {
    return []   
  } else {
    var a = xs[1]
    var b = xs[0]
    var d = a - b  
    return [d]
  }
}

// Образуют ли числа 2, 6, 10, 12, 16 ... арифметическую прогрессию?

function sequence(xs) {
  
  function tail(xs) {
    return xs.slice(1)
  }

  function empty(xs) {
    return xs.length < 1
  }

  function go(d0, ys) {
    if (empty(ys)) {
      return true
    } else {
      var dMaybe = sequenceStep(ys)

      if (dMaybe.length === 0) {
        return true
      } else {
        var d = dMaybe[0]
        if (d != d0) {
          return false
        } else {
          return go(d0, tail(ys))
        }
      }
    }
  }

  var dMaybe = sequenceStep(xs)
  
  if (dMaybe.length === 0) {
    return false
  } else {
    var tl = tail(xs)
    return go(dMaybe[0], tl)
  }
}

// tests

function test(description, result, expected) {
  var tested = result === expected ? 'passed' : 'not passed'
  return '[' + tested + '] ' + description
}

function print(s) {
  console.log(s)
}

var sequenceStepTests = [
  test('sequenceStep([10, 5, 0, -5]) eq [-5]', sequenceStep([10, 5, 0, -5])[0], -5),
  test('sequenceStep([10]) eq []', sequenceStep([10]).length, 0),
  test('sequenceStep([]) eq []', sequenceStep([]).length, 0)
]

var sequenceTests = [
  test('sequence([]) eq false', sequence([]), false), 
  test('sequence([2, 6, 10, 14, 18]) eq true', sequence([2, 6, 10, 14, 18]), true)
]

var tests = sequenceStepTests.concat(sequenceTests)
tests.forEach(print)
