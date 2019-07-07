const List = require('./list').List
const ListOps = require('./list').ListOps

const Cons = List.Cons
const Nil = List.Nil

test('fromArray [1, 2]', () => {
  const xs = List.fromArray([1, 2])
  const expected = Cons(1, Cons(2, Nil))
  expect(xs).toStrictEqual(expected)
})

test('fromArray[1]', () => {
  const xs = List.fromArray([1])
  const expected = Cons(1, Nil)
  expect(xs).toStrictEqual(expected)
})

test('fromArray[]', () => {
  const xs = List.fromArray([])
  const expected = Nil
  expect(xs).toStrictEqual(expected)
})


test('fromString \'12\'', () => {
  const xs = List.fromString('12')
  const expected = Cons('1', Cons('2', Nil))
  expect(xs).toStrictEqual(expected)
})

test('fromString \'1\'', () => {
  const xs = List.fromString('1')
  const expected = Cons('1', Nil)
  expect(xs).toStrictEqual(expected)
})

test('fromString \'\'', () => {
  const xs = List.fromString('')
  const expected = Nil
  expect(xs).toStrictEqual(expected)
})
