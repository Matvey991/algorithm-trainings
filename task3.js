// Напишите функцию, которая принимает массив слов, объединяет их в предложение и возвращает это предложение.
// Вы можете игнорировать необходимость очистки слов или добавления знаков препинания, но вам следует добавлять
// пробелы между каждым словом. Будьте внимательны: ни в начале, ни в конце предложения не должно быть пробела!
let words = ["hello", "world", "this", "is", "great"];
function smash(words) {
  return words.join(" ").trim();
}
smash(words)
