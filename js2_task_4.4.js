// В программе объявлен объект props, у которого задан набор свойств. 
// Объявите функцию getValue(), которая выводит в консоль строку со всеми свойствами и их значениям.
// Привяжите объект props в качестве контекста функции getValue() и присвойте получившуюся функцию переменной getValue.

let props = { 
    name: "Анатолий", 
    age: 29,
    sayHi: ()=>"привет"
}

function getValue() {
    const entries = Object.entries(this);
    const propsArray = entries.filter(([key, value]) => typeof value !== 'function').map(([key, value]) => `${key}: ${value}`);
    console.log(`Значения свойств объекта props (${propsArray.join(', ')})`);
}

const getValueBound = getValue.bind(props);
getValueBound();