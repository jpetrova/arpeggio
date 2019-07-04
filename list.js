
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
 * Функция fold сворачивает коллекцию. fold принимает список, начальное значение аккумулятора и
 * функцию f. Функция f принимает аккумулятор и элемент, и возвращает новый аккумулятор.
 */
function foldLeft(xs, zero, f) {
  function go(xs, acc) {
    if (ListOps.isEmpty(xs)) {
      return acc
    } else {
      return go(xs.tail, f(acc, xs.head))
    }
  }
  return go(xs, zero)
}

function foldRight(xs, zero, f) {
  const xs1 = ListOps.reverse(xs)
  function go(xs1, acc) {
    if (ListOps.isEmpty(xs1)) {
      return acc
    } else {
      return go(xs1.tail, f(acc, xs1.head))
    }
  }
  return go(xs1, zero)
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

/**
 * Функция, которая принимает массив и возвращает список
 */
function fromArray(arr) {
  function go(arr, xs) {
    if (arr.length == 0) {
      return xs
    } else {
      const x = arr.pop()
      const xs1 = ListOps.prepend(x, xs) 
      return go(arr, xs1)
    }
  }
  return go(arr, List.Nil)
}

/**
 * Функция, которая принимает строку и возвращает список
 */
function fromString(str){
  function go(str, xs) {
    if(str.length == 0) {
      return ListOps.reverse(xs)
    } else {
      x = +str.charAt(0)
      const xs1 = ListOps.prepend(x, xs)
      str1 = str.substring(1)
      return go(str1, xs1)
    }
  }
  return go(str, List.Nil)
}

const m = fromArray([1, 2, 3, 4])
const s = fromString('12345')
console.log('fromArray([1, 2, 3, 4]) = ', ListOps.toString(m)) // List(1, 2, 3, 4)
console.log('fromString("12345") = ', ListOps.toString(s)) // List(1, 2, 3, 4, 5)
