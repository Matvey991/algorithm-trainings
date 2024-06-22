// В программе объявлен объект props, у которого задан набор свойств. 
// Объявите функцию getValue(), которая выводит в консоль строку со всеми свойствами и их значениям.
// Привяжите объект props в качестве контекста функции getValue() и присвойте получившуюся функцию переменной getValue.

let props = { 
    name: "Анатолий", 
    age: 29,
    sayHi: ()=>"привет"
}
function getValue() {
    for (const key in this) {
        if (typeof this[key] !== 'function') {
            console.log(`${key}: ${this[key]}`);
        }
    }
}

const getValueBound = getValue.bind(props);
getValueBound();
 