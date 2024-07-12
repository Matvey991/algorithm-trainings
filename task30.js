// Напишите функцию, которая принимает массив строк в качестве аргумента и возвращает отсортированный массив, 
// содержащий те же строки, упорядоченные от самой короткой к самой длинной.
let array = ["Telescopes", "Glasses", "Eyes", "Monocles"]
function sortByLength (array) {
return array.sort((a,b) => a.length - b.length)
}  sortByLength(array)