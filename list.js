
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
   * Голова списка
   */
  head: function head(xs) {
    return xs.head
  },

  /**
   * Хвост списка
   */
  tail: function tail(xs) {
    return xs.tail
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
console.log('ListOps.isEmpty(List.Nil) = ', ListOps.isEmpty(List.Nil))
console.log('ListOps.isEmpty(List.Cons(1, List.Nil)) = ', ListOps.isEmpty(List.Cons(1, List.Nil)))
console.log('ListOps.head(List.Nil) = ', ListOps.head(List.Nil))
console.log('ListOps.head(List.Cons(1, List.Nil)) = ', ListOps.head(List.Cons(1, List.Nil)))
console.log('ListOps.tail(List.Nil) = ', ListOps.tail(List.Nil))
console.log('ListOps.tail(List.Cons(1, List.Nil)) = ', ListOps.tail(List.Cons(1, List.Nil)))
console.log('ListOps.prepend(2, List.Cons(1, List.Nil) = ', ListOps.prepend(2, List.Cons(1, List.Nil)))
