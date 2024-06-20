// Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на «0», а любую цифру от 5 и выше на «1». Верните полученную строку.
// Примечание: ввод никогда не будет пустой строкой.
let x = '45385593107843568'
function fakeBin(x) {
    let result = ''
    for (let i of x) {
        if (i < 5) {
            result += 0
        } else {
            result += 1
        }
    }
    return result
}
console.log(fakeBin(x))