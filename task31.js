// Создайте функцию, которая принимает список/массив и число n и возвращает список/массив первых n элементов из списка/массива.
let arr = [1, 2, 3, 4, 5];
function take(arr, n) {
  let n = 3;
  if (arr.length === 0) {
    console.log([]);
  } else {
    for (let i = 0; i < arr.length; i++) {
      let res = arr.slice(i, n);
      console.log(res);
      break;
    }
  }
}
take(arr, n);
