// В программе объявлена переменная goods, которая хранит объект со свойствами, описывающими товар.
// Сформируйте массив, который содержит в начале все названия свойств объекта,
// а потом все их значения. Результат выведите в консоль.

let goods = {
  title: "Самокат",
  price: 6000,
  good_id: 1,
};
let arr1 = Object.keys(goods);
let arr2 = Object.values(goods);
let res = [...arr1, ...arr2];
console.log(res)
