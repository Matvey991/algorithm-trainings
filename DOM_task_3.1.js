// В HTML-документе задан тег <div> с идентификатором div_elem. Напишите скрипт, который добавит в стиль данного элемента ширину и высоту по 100 пикселей.
function resizeDivAndLog() {
  let div = document.getElementById("div_elem");
  div.style.width = "100px";
  div.style.height = "100px";
}

resizeDivAndLog()
