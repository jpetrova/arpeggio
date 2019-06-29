
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
   * Функция map, которая принимает список и функцию f. И возвращает новый список, в котором к
   * каждому элементу была применена функция f
   */
  map: function map(xs, f) {
    function go(xs, ys) {
      if (ListOps.isEmpty(xs)) {
        return ListOps.reverse(ys)
      } else {
        const y = f(xs.head)
        const ys1 = ListOps.prepend(y, ys)
        const xs1 = xs.tail
        return go(xs1, ys1)
      }
    }
    return go(xs, List.Nil)
  }  

}

/**
 * Функция, которая принимает x и возвращает строковое представление x
 */
function toString(x) {
  return x.toString()
}

/**
 * Функция, которая принимает строку и возвращает значение строки,
 * на которой она была вызвана, преобразованное в верхний регистр: abh -> ABH
 */
function toUpper(x) {
  return x.toUpperCase()
}

/**
 * Функция, которая принимает число и возвращает строку, 
 * созданную из указанной последовательности значений Юникода
 * 97 -> a
 */
function charCode(x) {
  return String.fromCharCode(x)
}

function plus96(x) {
  return x + 96
}

/**
 * Функция, которая принимает число и умножает его на 2
 * 4 -> 8
 */
function double(x) {
  return x * 2
}

/**
 * Функция, которая принимает целое число и возводит его в степень, равную этому числу
 * 3 -> 27
 */
function pow(x) {
  return Math.pow(x, x)
}
 

/**
 * Функция  fold сворачивает коллекцию. fold принимает список, начальное значение аккумулятора и
 * функцию f. Функция f принимает аккумулятор и элемент, и возвращает новый аккумулятор.
 */
function fold(xs, zero, f) {
  function go(xs, acc) {
    if (ListOps.isEmpty(xs)) {
      return acc
    } else {
      return go(xs.tail, f(acc, xs.head))
    }
  }
  return go(xs, zero)
}

/**
 * Функция, которая принимает два элемента и объединяет их
 */
function concat(acc, x) {
  return acc + x
}

/**
 * Функция, которая принимает два элемента и возвращает их произведение
 */
function product(acc, x) {
  return acc * x
}

const data = List.Cons(5, List.Cons(2, List.Cons(3, List.Nil)))
const data1 = List.Cons('12', List.Cons('34', List.Cons('567', List.Nil)))
const test1 = ListOps.map(data, plus96)
const test2 = ListOps.map(test1, toString)
const test3 = ListOps.map(test2, charCode)
const test4 = ListOps.map(test3, toUpper)
const test5 = fold(data, 0, concat)
const test6 = fold(data1, '', concat)
const test7 = fold(data, 1, product)



console.log('data = ', ListOps.toString(data))
console.log('map(data, f1) =', ListOps.toString(test1))
console.log('map(test1, f4) =', ListOps.toString(test2))
console.log('map(test2, f3) =', ListOps.toString(test3))
console.log('map(test3, f2) =', ListOps.toString(test4))
console.log('fold(data, 0, concat) = ', test5) // concat = 10
console.log('fold(data1, " ", concat) = ', test6) // concat =  1234567
console.log('fold(data, 1, product = ', test7) // product = 30
