// В программе задан двумерный массив employee. Удалите у данного массива значение,
// у которого первый элемент hireDate,
// и добавьте новое значение ["jobName", "IT PROG"] в конец массива. Результат выведите в консоль.
let employee = [
  ["firstName", "Ivan"],
  ["lastName", "Ivanov"],
  ["hireDate", "21.10.2015"],
];
let res = employee.filter((e) => e[0] !== "hireDate");
res.push(["jobName", "IT PROG"]);
console.log(res)
