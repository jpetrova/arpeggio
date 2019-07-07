const List = require('./list').List

const Cons = List.Cons
const Nil = List.Nil

describe('fromArray', () => {
  
  test('empty', () => {
    const xs = List.fromArray([])
    const expected = Nil
    expect(xs).toStrictEqual(expected)
  })
  
  test('one element', () => {
    const xs = List.fromArray([1])
    const expected = Cons(1, Nil)
    expect(xs).toStrictEqual(expected)
  })
  
  test('many elements', () => {
    const xs = List.fromArray([1, 2])
    const expected = Cons(1, Cons(2, Nil))
    expect(xs).toStrictEqual(expected)
  })
})

describe('fromString', () => {

  test('empty', () => {
    const xs = List.fromString('')
    const expected = Nil
    expect(xs).toStrictEqual(expected)
  })

  test('one element', () => {
    const xs = List.fromString('1')
    const expected = Cons('1', Nil)
    expect(xs).toStrictEqual(expected)
  })

  test('many elements', () => {
    const xs = List.fromString('12')
    const expected = Cons('1', Cons('2', Nil))
    expect(xs).toStrictEqual(expected)
  })
})
