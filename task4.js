// Создайте функцию, которая выдает персонализированное приветствие. Эта функция принимает два параметра: nameи owner.
// Используйте условные выражения, чтобы вернуть правильное сообщение:
// случай	возвращаться
// имя равно владельцу	'Привет босс'
// в противном случае	«Привет, гость»

function greet() {
  let name = "Greg";
  let owner = "Daniel";
  if (name.toLowerCase() === owner.toLowerCase()) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}
greet();
