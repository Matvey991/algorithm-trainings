// В программе задан объект employees, который содержит ряд свойств и методов.
// Сформируйте строку с именами всех свойств через запятую и пробел (, ) и выведите в консоль.
// Имена методов добавляться не должны.
let employees = {
  firstName: "Петя",
  lastName: "Иванов",
  ratePerDay: 2500,
  workingDays: 5,
  getSalary() {
    console.log(employees.ratePerDay * employees.workingDays);
  },
};
let arr = [];
for (let i in employees) {
  let res = typeof employees[i];
  if (res === "function") {
    delete employees[i];
  }
}
console.log(Object.keys(employees).join(", "));
