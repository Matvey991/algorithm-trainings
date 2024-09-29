// В программе объявлена переменная car, которая хранит в себе объект,
// у которого есть как минимум одно свойство — engine.
// Удалите из объекта car свойство engine и результат выведите в консоль.
let car = {
  model: "Audi",
  color: "white",
  weight: 1850,
  engine: "170 hp",
};
delete car.engine;
console.log(car);
