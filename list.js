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
  },

  /**
   * Функция, которая принимает массив и возвращает список
   */
  fromArray: function fromArray(arr) {
    function go(arr, xs) {
      if (arr.length == 0) {
        return xs
      } else {
        const x = arr.pop()
        const ys = ListOps.prepend(x, xs) 
        return go(arr, ys)
      }
    }
    return go(arr, Nil)
  },

  /**
   * Функция, которая принимает строку и возвращает список
   */
  fromString: function fromString(str) {
    function go(str, cs) {
      if (str.length == 0) {
        return cs
      } else {
        const idx = str.length - 1
        const c = str.charAt(idx)
        const xs = ListOps.prepend(c, cs)
        return go(str.substring(0, idx), xs)
      }
    }
    return go(str, Nil)
  },
  
  /**
   * Функция преобразовывает аргументы в список
   */
  of: function of(...args) {
    return List.fromArray(args)
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
    return Cons(x, xs) 
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
    return go(xs, Nil)
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
    return go(xs, Nil)
  },

  /**
   * Функция fold сворачивает коллекцию. fold принимает список, начальное значение аккумулятора и
   * функцию f. Функция f принимает аккумулятор и элемент, и возвращает новый аккумулятор.
   * Функция foldLeft сворачивает список слева направо
   */
  foldLeft: function foldLeft(xs, zero, f) {
    function go(xs, acc) {
      if (ListOps.isEmpty(xs)) {
        return acc
      } else {
        return go(xs.tail, f(acc, xs.head))
      }
    }
    return go(xs, zero)
  },

  /**
   * Функция foldRight сворачивает список справа налево
   */
  foldRight: function foldRight(xs, zero, f) {
    const ys = ListOps.reverse(xs)
    return ListOps.foldLeft(ys, zero, f)
  }
  
}

const Nil = List.Nil
const Cons = List.Cons

module.exports = {
  List: List,
  ListOps: ListOps
}
