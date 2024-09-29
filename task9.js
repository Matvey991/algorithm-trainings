// Суть этой ката заключается в умножении заданного числа на восемь, если оно четное, и на девять в противном случае.
let number = 2;
function simpleMultiplication(number) {
  if (number % 2 === 0) {
    let arr = number * 8;
    return number;
  } else {
    let arr2 = number * 9;
    return number;
  }
}
simpleMultiplication(number);
