// Имея двумерный (вложенный) список (массив, вектор, ..) размера m * n, ваша задача — найти сумму минимальных значений в каждой строке.

// Например:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// Таким образом, функция должна вернуть значение, 26поскольку сумма минимумов равна 1 + 5 + 20 = 26.

let arr = [
  [7, 9, 8, 6, 2],
  [6, 3, 5, 4, 3],
  [5, 8, 7, 4, 5],
];
console.log(arr.reduce((a, b) => a + Math.min(...c)))
