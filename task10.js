// Учитывая набор чисел, верните аддитивную обратную величину каждого из них. Каждое положительное становится отрицательным, а отрицательное становится положительным.
// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []
// Вы можете предположить, что все значения являются целыми числами. Не изменяйте входной массив.
let array = [1, 2, 3, 4, 5];
function invert(array) {
  return array.map((e) => -e);
}
invert(array)
