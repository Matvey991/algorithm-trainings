// Вы получаете массив чисел, возвращаете сумму всех положительных чисел.
// Пример [1,-4,7,12]=>1 + 7 + 12 = 20
// Примечание. Если суммировать нечего, сумма по умолчанию равна 0.
let arr = [1,-2,3,4,5] 
function positiveSum(arr) {
let filt = arr.filter(e => e > 0) 
let res = filt.reduce(function(previousValue, currentItem) {
   return previousValue + currentItem
}, 0)
return res 
}
positiveSum(arr) 