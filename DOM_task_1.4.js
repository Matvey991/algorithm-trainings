// Выведите в консоль название последнего тега, у которого есть класс target.
// Пример заданного HTML-документа:
// <div class="target">Первый элемент</div>
// <p class="target">Второй второй</p>
// <span class="target">Третий третий</span>
// Пример результата:
// span
let res = document.querySelectorAll(".target");
res = res[2];
let arr = res.tagName.toLowerCase();
console.log(arr);
