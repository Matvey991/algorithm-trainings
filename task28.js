// Найдите средний балл своих одногрупнников в массиве и сравните его со своим, выведите true если средний 
// балл ваших одногрупнников больше вашего. В ином случае false
let classPoints = [100, 40, 34, 57, 29, 72, 57, 88]
let yourPoints = 75
let res = classPoints.length
let res2 = classPoints.reduce(function(acum, current) {
    return acum + current
  })
let result = res2 / res
if (yourPoints >= result) {
console.log(true)
} else {
console.log(false)
}