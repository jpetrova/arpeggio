const ones = require('./ones')

describe('ones', () => {

  test('0', () => {
    const x = ones(0)
    const expected = 0
    expect(x).toBe(expected)
  })

  test('1', () => {
    const x = ones(1)
    const expected = 1
    expect(x).toBe(expected)
  })

  test('2', () => {
    const x = ones(2)
    const expected = 1
    expect(x).toBe(expected)
  })

  test('3', () => {
    const x = ones(3)
    const expected = 2
    expect(x).toBe(expected)
  })
})

