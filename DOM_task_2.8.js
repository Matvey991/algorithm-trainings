// В HTML-документе заданы два <div> тега с идентификаторами div1 и div2. Напишите скрипт, который позволит перенести содержимое тега
// с идентификатором div1 в конец тега с идентификатором div2.
// Пример заданного HTML-документа:
// <div id=”div1”><h2>Text</h2><span>subtext</span></div>
// <div id=”div2”><h1>Title</h1></div>
// Пример результата в HTML-документе:
// <div id=”div1”></div>
// <div id=”div2”><h1>Title</h1><h2>Text</h2><span>subtext</span></div>

let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");
div2.innerHTML += div1.innerHTML;
div1.innerHTML = ""
