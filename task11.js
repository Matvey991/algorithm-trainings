// Реализуйте функцию, которая складывает два числа и возвращает их сумму в двоичном виде. Преобразование может быть выполнено до или после добавления.
// Возвращаемое двоичное число должно быть строкой.
// Примеры:(Ввод1, Ввод2 --> Вывод (объяснение)))
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
let a = 1;
let b = 2;
function addBinary(a, b) {
  let arr = a + b;
  let res = arr.toString(2);
  return `${a} + ${b} = ${arr} in decimal or ${res} in binary`;
}
console.log(addBinary(a, b));
