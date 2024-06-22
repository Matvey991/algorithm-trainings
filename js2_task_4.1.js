// В программе объявлены объекты pet_1 и pet_2. 
// Напишите функцию getName() и присвойте ее объектам pet_1 и pet_2 в качестве метода. 
// При вызове метода getName() он должен вернуть имя и возраст питомца через пробел. 
// Решить задачу необходимо с использованием this.
let pet_1 = { 
    name: "Шарик", 
    age: 10 
};

let pet_2 = { 
    name: "Жучка", 
    age: 5
};
pet_2.new_name = pet_2.name
delete pet_2.name
pet_2.new_age = pet_2.age
delete pet_2.age
let res = {...pet_1, ...pet_2}
getName = getName.bind(res)
function getName() {
    let arr = `${this.name} ${this.age}; `
    let arr1 = `${this.new_name} ${this.new_age}`
    return arr + arr1
}
console.log(getName()) 