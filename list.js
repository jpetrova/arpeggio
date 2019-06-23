
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
   * toString
   */
  toString: function toString(xs) {
    const strBig = 'List('
    const sep = ', '
    const str = ListOps.mkString(xs, sep)
    const strEnd = ')'
    return strBig + str + strEnd
  }

}


const oneElementList = List.Cons(1, List.Nil)
const emptyList = List.Nil

console.log('List.Nil = ', List.Nil)
console.log('List.Cons(1, List.Nil) = ', List.Cons(1, List.Nil))
console.log('ListOps.isEmpty(List.Nil) = ', ListOps.isEmpty(List.Nil))
console.log('ListOps.isEmpty(List.Cons(1, List.Nil)) = ', ListOps.isEmpty(List.Cons(1, List.Nil)))
console.log('oneElementList.head = ', oneElementList.head)
console.log('emptyList.head = ', emptyList.head)
console.log('oneElementList.tail = ', oneElementList.tail)
console.log('emptyList.tail = ', emptyList.tail)
console.log('ListOps.prepend(2, List.Cons(1, List.Nil) = ', ListOps.prepend(2, List.Cons(1, List.Nil)))
console.log('ListOps.reverse(List.Cons(1, List.Cons(2, List.Nil)) = ', ListOps.reverse(List.Cons(1, List.Cons(2, List.Nil))))
console.log('ListOps.mkString(List.Cons(a, List.Cons(b, List.Nil))) = ', ListOps.mkString(List.Cons('a', List.Cons('b', List.Nil)), ', '))
console.log('ListOps.mkString(List.Nil, ', ') = ', ListOps.mkString(List.Nil, ', '))
console.log('ListOps.mkString(List.Cons(1, List.Nil), ', ') = ', ListOps.mkString(List.Cons(1, List.Nil), ', '))
console.log('ListOps.toString(List.Cons(a, List.Cons(b, List.Nil))) = ', ListOps.toString(List.Cons('a', List.Cons('b', List.Nil)), ', '))
