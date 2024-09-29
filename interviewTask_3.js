// Дан список целых чисел и одно значение суммы,
// вернуть первые два значения (анализируйте слева направо) в порядке появления, которые в сумме образуют сумму.
let arr = [11, 2, 7, 3];
let num = 10;
function sumPars(arr, num) {
  const seen = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complemet = num - arr[i];
    if (seen.has(complemet)) {
      return [complemet, arr[i]];
    }
    seen.set(arr[i], i);
  }
  return null;
}
console.log(sumPars(arr, num))
