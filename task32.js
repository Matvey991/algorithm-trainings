// Напишите функцию, которая возвращает новую строку, содержащую те же последовательности символов, за исключением первого и последнего, но на этот раз разделенные пробелами.
// Если входная строка пуста или удаление первого и последнего элементов приведет к тому, что результирующая строка станет пустой, 
// вернуть пустое значение (представленное как общее значение NULLв примерах ниже).
let arr = "1,2,3"
function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
  } array(arr)