// В программе задана переменная values, которая хранит массив из строк.
//  Определите математическую сумму всех элементов, которые при преобразовании в число не вернут значение NaN. 
//  Результат выведите в консоль.
let values = ["100", "30", "Не число", "20", "Тоже не число"]
let sum = []
for (let i = 0; i < values.length; i++) {
if (!isNaN(values[i])) {
sum.push(values[i])
}
}
let transformation = sum.map(Number)
let res = transformation.reduce(function (previousValue, currentItem) {
   return previousValue + currentItem
}, 0)
console.log(res)