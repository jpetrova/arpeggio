// Бутерброды с сыром, колбасой и вареньем в сотношении 5:7:8. Всего бутербродов 120. Сколько из них с колбасой?

function parts(cheese, ham, jam, sandwiches) {
  var n = cheese + ham + jam
  var a = sandwiches / n
  var b = ham * a
  return b
}

var x = parts(5, 7, 8, 120)
console.log(x == 42)
