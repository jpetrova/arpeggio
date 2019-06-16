/**
 * Модуль для работы с массивом как со списком.
 * 1. пустой ли массив
 * 2. откусить голову
 * 3. сохранить хвост и передать его дальше
 * 4. присоединить голову к другому массиву
 */

const List = {
    isEmpty: function isEmpty(xs) {
      if (xs.length == 0) {
        return true
      } else {
        return false
      }
    },
    head: function head(xs) {
      const h = xs[0]
      return h
    },
    tail: function tail(xs) {
      const ys = []
      const ys2 = ys.concat(xs)
      const h = ys2.splice(0, 1)
      return ys2
    },
    prepend: function prepend(xs, s) {
      const s1 = [s]
      const ys = s1.concat(xs)
      return ys
    }
    
  }
  
  
  const test1 = List.isEmpty([1,2,3])
  const test2 = List.isEmpty([])
  const test3 = List.head([1,2,3])
  const test4 = List.tail([1,2,3])
  const test5 = List.prepend([1,2,3], 0)
  console.log('List.isEmpty([1,2,3]) = ', test1)
  console.log('List.isEmpty([]) = ', test2)
  console.log('List.head([1,2,3]) = ', test3)
  console.log('List.tail([1,2,3]) = ', test4)
  console.log('List.prepend([1,2,3], 0) = ', test5)
  
  /**
   * На вход подается массив, необходимо развернуть его
   */
  
  function reverse(xs) {
   function go(xs, ys) {
     if (List.isEmpty(xs) == true) {
      return ys
     }
     else {
     const h = List.head(xs)
     const ys1 = List.prepend(ys, h)
     const xs1 = List.tail(xs)
     return go(xs1, ys1)
     }
   } 
     return go(xs, [])
  }
  
  const rev = reverse([1,2,3])
  console.log('reverse [1,2,3] = ', rev)
  