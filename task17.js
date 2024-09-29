// Учитывая два положительных целых числа nи p, мы хотим найти положительное целое число k, если оно существует, такое, что сумма цифр,
//  nвозведенных в последовательные степени, начиная с , pравна k * n.
// Если это так, мы вернёмся k, если нет, то вернёмся -1.
let n = 46288;
let p = 3;
let k = 0;
function digPow(n, p) {
  let arr = n.toString().split("").map(Number);
  for (let i = 0; i < arr.length; i++) {
    let lol = arr[i] ** p;
    p += 1;
    k += lol;
  }
  let result = k / n;
  if (result * n === k) {
    return result;
  } else {
    return -1;
  }
}
digPow(n, p)
