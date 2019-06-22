/**
 * Структура данных список
 */
const List = {
  
  /**
   * Пустой список
   */
  Nil: {
    isEmpty: true,
    head: undefined,
    tail: undefined
  },
  
  /**
   * Непустой список
   */
  Cons: function Cons(head, tail) {
    return {
      isEmpty: false,
      head: head,
      tail: tail
    }
  }

}


/**
 * Модуль для работы со списком
 */
const ListOps = {

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
  prepend: function prepend(x, xs) {
    return List.Cons(x, xs) 
  }

}

console.log('List.Nil = ', List.Nil)
console.log('List.Cons(1, List.Nil) = ', List.Cons(1, List.Nil))

console.log('ListOps.isEmpty([1,2,3]) = ', ListOps.isEmpty([1,2,3]))
console.log('ListOps.isEmpty([]) = ', ListOps.isEmpty([]))
console.log('ListOps.head([1,2,3]) = ', ListOps.head([1,2,3]))
console.log('ListOps.tail([1,2,3]) = ', ListOps.tail([1,2,3]))
console.log('ListOps.prepend(2, List.Cons(1, List.Nil) = ', ListOps.prepend(2, List.Cons(1, List.Nil)))
