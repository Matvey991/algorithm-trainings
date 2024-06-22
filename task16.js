// Напишите функцию, которая вычисляет среднее значение чисел в заданном списке.
// Примечание. Пустые массивы должны возвращать 0.
let array = []
function findAverage(array) {
let sum = array.length
if (sum === 0) {
return 0
}
else if (sum > 0) {
let arr = array.reduce(function(previousValue, currentItem) {
return previousValue + currentItem
}, 0)
let res = arr / sum 
return res
}
}
