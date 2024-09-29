// Учитывая строку, необходимо вернуть строку, в которой каждый символ (с учетом регистра) повторяется один раз.
let str = "abc";
function doubleChar(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res += str[i].repeat(2);
  }
  return res;
}
