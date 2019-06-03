function squareRoots(a, b, c) {
  const d = b * b - 4 * a * c
  if (d < 0) {
    return []
  } else if (d === 0) {
    const x = -b / (2 * a)
    return [x]
  } else {
    const x1 = (-b + Math.sqrt(d)) / (2 * a)
    const x2 = (-b - Math.sqrt(d)) / (2 * a)
    return [x1, x2]
  }
}

var result = squareRoots(2, 5, 3)
console.log(result) // [-1, -1.5]
