// Бутерброды с сыром, колбасой и вареньем в сотношении 5:7:8. Всего бутербродов 120. Сколько из них с колбасой?

function parts(cheese, ham, jam) {
  var n = cheese + ham + jam
  var a = 120 / n
  var b = ham * a
  return b
}

var x = parts(5, 7, 8)
console.log(x == 42)
