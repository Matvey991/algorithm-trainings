// В HTML-документе задан тег <ul> c классом cars. Внутри этого тега есть несколько тегов <li>. Реализуйте скрипт,
// который считывает содержимое этих элементов <li>, формирует из них массив и сохраняет в переменной cars.
// Пример заданного HTML-документа:
// <ul id="cars">
// <li>Tesla</li>
// <li>Opel</li>
// </ul>
// Пример результата:
// ["Tesla',"Opel"]
let res = "";
let arr = document.querySelector(".cars").innerText;
res += arr;
let cars = res.replace(/\n/g, " ").split(" ")
