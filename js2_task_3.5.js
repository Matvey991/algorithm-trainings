// В программе задан двумерный массив employee. Удалите у данного массива значение, 
// у которого первый элемент hireDate, 
// и добавьте новое значение ["jobName", "IT PROG"] в конец массива. Результат выведите в консоль.
let employee  = [
    ["firstName", "Ivan"], 
    ["lastName", "Ivanov"],
    ["hireDate", "21.10.2015"]
] 
let arr = ["hireDate", "21.10.2015"]
for (let i of employee) {
    if (employee[i] === arr) {
        console.log(true)
    } else {
        console.log(false)
    }
}