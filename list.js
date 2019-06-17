/**
 * Модуль для работы с массивом как со списком.
 */
const List = {

  /** 
   * Является ли список пустым
   */
  isEmpty: function isEmpty(xs) {
    if (xs.length == 0) {
      return true
    } else {
      return false
    }
  },

  /** 
   * Голова списка
   */
  head: function head(xs) {
    const h = xs[0]
    return h
  },

  /**
   * Хвост списка
   */
  tail: function tail(xs) {
    const ys = []
    const ys2 = ys.concat(xs)
    const h = ys2.splice(0, 1)
    return ys2
  },

  /**
   * Вставка в начало списка
   */
  prepend: function prepend(xs, s) {
    const s1 = [s]
    const ys = s1.concat(xs)
    return ys
  },

  /**
   * Развернуть список
   */
  reverse: function reverse(xs) {
    function go(xs, ys) {
      if (List.isEmpty(xs)) {
        return ys
      } else {
        const h = List.head(xs)
        const ys1 = List.prepend(ys, h)
        const xs1 = List.tail(xs)
        return go(xs1, ys1)
      }
    } 
    return go(xs, [])
  }

}

/**
 * Принимает на вход коллекцию целых чисел
 * возвращает коллекцию с эллементами < 5
 * порядок не сохраняется
 */
function filter(xs) {
  function go(xs, ys) {
    if (List.isEmpty(xs)) {
      return ys
    } else {
      const h = List.head(xs)
      if (h > 5) {
        const tl = List.tail(xs)
        return go(tl, ys)
      } else {
        const ys1 = List.prepend(ys, h)
        const xs1 = List.tail(xs)
        return go(xs1, ys1)
      }
    } 
  }
  return go(xs, [])
}

const test1 = List.isEmpty([1,2,3])
const test2 = List.isEmpty([])
const test3 = List.head([1,2,3])
const test4 = List.tail([1,2,3])
const test5 = List.prepend([1,2,3], 0)
const test6 = List.reverse([1,2,3])
const test7 = filter([1,2,3,4,5,6])

console.log('List.isEmpty([1,2,3]) = ', test1)
console.log('List.isEmpty([]) = ', test2)
console.log('List.head([1,2,3]) = ', test3)
console.log('List.tail([1,2,3]) = ', test4)
console.log('List.prepend([1,2,3], 0) = ', test5)
console.log('List.reverse [1,2,3] = ', test6)
console.log('filter([1,2,3,4,5,6]) = ', test7)
