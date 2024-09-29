// История:
// Боб работает водителем автобуса. Однако он стал чрезвычайно популярен среди жителей города. При таком количестве пассажиров, желающих сесть в его автобус,
//  ему иногда приходится сталкиваться с проблемой нехватки места в автобусе! Он хочет, чтобы вы написали простую программу, сообщающую ему, сможет ли он вместить всех пассажиров.
// Обзор задачи:
// Вам необходимо написать функцию, которая принимает три параметра:
// capколичество людей, которое может вместить автобус, не считая водителя.
// onколичество людей в автобусе, не считая водителя.
// waitколичество людей, ожидающих посадки в автобус, не считая водителя.
// Если места достаточно, вернуть 0, а если нет, вернуть количество пассажиров, которых он не может взять.

let cap = 100;
let on = 60;
let wait = 50;
function enough(cap, on, wait) {
  if (on + wait <= cap) {
    return 0;
  } else {
    return on + wait - cap;
  }
}
enough(cap, on, wait)
