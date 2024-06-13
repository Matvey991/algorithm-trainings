// В программе задан двумерный массив array. Создайте и вызовите функцию countString(), 
// которая считает количество значений массива array, у которых второй элемент является строкой. 
// Функция countString() должна выводить в консоль сообщение, как в примере.
// Пример результата:
// Количество строковых элементов в именованном массиве: 1

let array = [
        [ "boolean", true ], 
        [ "number", 4 ],
        [ "string", "word" ],
        [ "object", {}]
    ]
let res = array.filter(([_, b]) => typeof b === 'string').length
console.log(`Количество строковых элементов в именованном массиве: ${res}`)