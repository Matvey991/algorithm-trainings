let numbers = "1 2 3 4 5"
let arr = numbers.split(' ').map(Number)
let res1 = Math.max(...arr)
let res2 = Math.min(...arr)
return `${res1} ${res2}`