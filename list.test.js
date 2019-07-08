const List = require('./list').List
const ListOps = require('./list').ListOps

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

describe('isEmpty', () => {
  
  test('empty', () => {
    const xs = Nil
    const expected = true
    expect(ListOps.isEmpty(xs)).toStrictEqual(expected)
  })
  
  test('not empty', () => {
    const xs = Cons(1, Cons(2, Nil))
    const expected = false
    expect(ListOps.isEmpty(xs)).toStrictEqual(expected)
  })
})

describe('prepend', () => {
  test('empty List', () => {
    const xs = Nil
    const expected = Cons(1, Nil)
    expect(ListOps.prepend(1, xs)).toStrictEqual(expected)
  })
  
  test('one element List', () => {
    const xs = Cons(2, Nil)
    const expected = Cons(1, Cons(2, Nil))
    expect(ListOps.prepend(1, xs)).toStrictEqual(expected)
  })

  test('many elements List', () => {
    const xs = Cons(1, Cons(2, Nil))
    const expected = Cons(0, Cons(1, Cons(2, Nil)))
    expect(ListOps.prepend(0, xs)).toStrictEqual(expected)
  })
})

describe('reverse', () => {
  
  test('Nil', () => {
    const xs = Nil
    const expected = Nil
    expect(ListOps.reverse(xs)).toStrictEqual(expected)  
  })
  
  test('one element', () => {
    const xs = Cons(1, Nil)
    const expected = Cons(1, Nil)
    expect(ListOps.reverse(xs)).toStrictEqual(expected)
  })
  
  test('many elements', () => {
    const xs = Cons(1, Cons(2, Nil))
    const expected = Cons(2, Cons(1, Nil))
    expect(ListOps.reverse(xs)).toStrictEqual(expected)
  })
})

describe('mkString', () => {

  test('Nil', () => {
    const xs = Nil
    const expected = ''
    expect(ListOps.mkString(xs, ', ')).toStrictEqual(expected)  
  })

  test('one element', () => {
    const xs = Cons(1, Nil)
    const expected = '1'
    expect(ListOps.mkString(xs, ', ')).toStrictEqual(expected)  
  })

  test('many elements', () => {
    const xs = Cons(1, Cons(2, Nil))
    const expected = '1, 2'
    expect(ListOps.mkString(xs, ', ')).toStrictEqual(expected)  
  })
})

describe('toString', () => {
  test('Nil', () => {
    const xs = Nil
    const expected = 'List()'
    expect(ListOps.toString(xs)).toStrictEqual(expected)  
  })

  test('one element', () => {
    const xs = Cons(1, Nil)
    const expected = 'List(1)'
    expect(ListOps.toString(xs)).toStrictEqual(expected)  
  })

  test('many elements', () => {
    const xs = Cons(1, Cons(2, Nil))
    const expected = 'List(1, 2)'
    expect(ListOps.toString(xs)).toStrictEqual(expected)  
  })
})
