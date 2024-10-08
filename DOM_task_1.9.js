// В HTML-документе заданы теги с числовым значением с классом numeric. Напишите скрипт, который оборачивает в тег <b> все значения тега с классом numeric, которые меньше нуля.
// Пример заданного HTML-документа:
// <p class="numeric">62</p>
// <p class="numeric">-12</p>
// <p class="numeric">16</p>
// Пример результата:
// <p class="numeric">62</p>
// <p class="numeric"><b>-12</b></p>
// <p class="numeric">16</p>

let numerics = document.getElementsByClassName("numeric");
for (let i = 0; i < numerics.length; i++) {
  numeric = numerics[i];
  let value = parseInt(numeric.textContent, 10);
  if (value < 0) {
    let bold = document.createElement("b");
    bold.textContent = numeric.textContent;
    numeric.innerHTML = "";
    numeric.appendChild(bold)
  }
}
