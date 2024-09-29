// Учитывая непустой массив целых чисел, верните результат умножения значений по порядку. Пример:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
let x = [1, 2, 3];
function grow(x) {
  const sum = x.reduce(function (previousValue, currentItem) {
    return previousValue * currentItem;
  });
  return sum;
}
grow(x);
