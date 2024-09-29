// Вам дан массив (длина которого не менее 3, но может быть очень большим), содержащий целые числа.
// Массив либо полностью состоит из нечетных целых чисел, либо полностью состоит из четных целых чисел,
// за исключением одного целого числа N. Напишите метод, который принимает массив в
// качестве аргумента и возвращает этот «выброс» N.

let integers = [-2, -6, -8, -10, -3];
function findOutlier(integers) {
  let even = [];
  let odd = [];
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      even.push(integers[i]);
    } else if (integers[i] % 2 !== 0) {
      odd.push(integers[i]);
    }
  }
  if (even.length === 1) {
    let res1 = even.join();
    return Number(res1);
  } else if (odd.length === 1) {
    let res2 = odd.join();
    return Number(res2);
  }
}
findOutlier(integers);
