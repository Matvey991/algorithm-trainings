// В HTML-документе заданы теги <p>. Напишите скрипт, который удаляет теги, внутри которых хранится текстовое значение Delete.
// Пример заданного HTML-документа:
// <p>Delete<p>
// <p>Абзац<p>
// <p>Delete<p>
// Пример результата:
// <p>Абзац<p></p>

let res = document.querySelectorAll('p')
for (let i = 0; i < res.length; i++) {
if (res[i].textContent === 'Delete') {
    res[i].remove()
}
        console.log(res[i])
}