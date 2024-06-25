// В HTML-документе существует тег с классом price и числовым значением. Напишите скрипт, который увеличивает в теге значение цены в два раза.
// Пример заданного HTML-документа:
// <div class="price">100</div>
// Пример результата:
// <div class="price">200</div>
let arr = document.querySelectorAll('.price')
for (let i = 0; i < arr.length; i++) {
    let res = arr[i].innerHTML
    let result = res * 2
    res[i].innerHTML = result
}