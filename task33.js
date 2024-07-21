let arr = [1,2]
function pra(arr) {
let result = []
if (arr.length <= 0) {
return null
} else {
for (let i = 0; i < arr.length; i++) {
if (arr[i] !== arr[i - 1] + 1) {
result.push(arr[i])
console.log(result[1])
} else {
return null
}
}
}
} pra(arr)