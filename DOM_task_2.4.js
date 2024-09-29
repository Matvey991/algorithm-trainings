// В HTML-документе есть несколько тегов <div>. Напишите скрипт, который всем тегам <div> добавляет класс adds.
// Пример заданного HTML-документа:
// <div><p>Реклама</p></div>
// <div>Баннер</div>
// Пример результата:
// <div class="adds"><p>Реклама</p></div>
// <div class="adds">Баннер</div>

let res = document.querySelectorAll("div");
for (let i = 0; i < res.length; i++) {
  res[i].className = "adds";
  console.log(res[i])
}
