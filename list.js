
/**
 * Варианты списка
 */
const ListKind = {
  Nil: 0,
  Cons: 1
}

/**
 * Структура данных список
 */
const List = {
  
  /**
   * Пустой список
   */
  Nil: {
    kind: ListKind.Nil,
    head: undefined,
    tail: undefined
  },
  
  /**
   * Непустой список
   */
  Cons: function Cons(head, tail) {
    return {
      kind: ListKind.Cons,
      head: head,
      tail: tail
    }
  }

}


/**
 * Операции над списком
 */
const ListOps = {

  /** 
   * Является ли список пустым
   */
  isEmpty: function isEmpty(xs) {
    switch (xs.kind) {
      case ListKind.Nil: return true
      case ListKind.Cons: return false
    }
  },

  /**
   * Вставка в начало списка
   */
  prepend: function prepend(x, xs) {
    return List.Cons(x, xs) 
  },

  /**
   * Развернуть список
   */
  reverse: function reverse(xs) {
    function go(xs, ys) {
      if (ListOps.isEmpty(xs)) {
        return ys
      } else {
        const x = xs.head
        const ys1 = ListOps.prepend(x, ys)
        const xs1 = xs.tail
        return go(xs1, ys1)
      }
    }
    return go(xs, List.Nil)
  },

  /**
   * Сделать строку из списка
   */
  mkString: function mkString(xs, sep) {
    function go(xs, str) {
      if (ListOps.isEmpty(xs)) {
        return str
      } else if (ListOps.isEmpty(xs.tail)) {
        return go(xs.tail, str + xs.head.toString())
      } else {
        return go(xs.tail, str + xs.head.toString() + sep)
      }
    }
    return go(xs, '')
  },

  /**
   * Строковое представлене списка
   */
  toString: function toString(xs) {
    return 'List(' + ListOps.mkString(xs, ', ') + ')'
  },

  /**
   * Функция map
   */
  map: function map(xs, f) {
    function go(xs, ys) {
      if (ListOps.isEmpty(xs)) {
        return ListOps.reverse(ys)
      } else {
        const x = f(xs.head)
        const ys1 = ListOps.prepend(x, ys)
        const xs1 = xs.tail
        return go(xs1, ys1)
      }
    }
    return go(xs, List.Nil)
  }  

}

/**
 * Функция, которая принимает список и возвращает строку
 */
function f1(x) {
  return x.toString()
}

/**
 * Функция, которая принимает список строк и возвращает список, где все строки прописными буквами
 * 'a, b, c, d', 'cbhi'  -> 'A, B, C, D, CBHI'
 */
function f2(x) {
  return x.toUpperCase()
}

/**
 * Функция, которая принимает число и возвращает симфол с таким кодом из таблицы ASCII
 */
function f3(x) {
  return String.fromCharCode(x)
}

function f4(x) {
  return x + 96
}

/**
 * Функция, которая принимает список чисел, возвращает новый список, каждый эллемент которого умножен на 2
 * [1, 2, 3, 4] -> [2, 4, 6, 8]
 */
function f5(x) {
  return x * 2
}

/**
 * Написать функцию, которая принимает список целых чисел и возвращает список, в котором каждый эл-т
 * возведен в степень значения этого эл-та
 * [2, 3, 4] -> [4, 27, 256]
 */
function f6(x) {
  return Math.pow(x, x)
}


const data = List.Cons(1, List.Cons(2, List.Cons(3, List.Nil)))
const test1 = ListOps.map(data, f4)
const test2 = ListOps.map(test1, f1)
const test3 = ListOps.map(test2, f3)
const test4 = ListOps.map(test3, f2)

console.log('data = ', ListOps.toString(data))
console.log('map(data, f1) =', ListOps.toString(test1))
console.log('map(test1, f4) =', ListOps.toString(test2))
console.log('map(test2, f3) =', ListOps.toString(test3))
console.log('map(test3, f2) =', ListOps.toString(test4))
