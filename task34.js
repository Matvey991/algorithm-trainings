// Панграмма — это предложение, которое содержит каждую букву алфавита хотя бы один раз.
// Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, потому что в нем хотя
// бы один раз используются буквы AZ (регистр не имеет значения).
function isPangram(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let s = /\W/g;
  let str = string.toLowerCase().replace(s, "");
  let result = true;
  for (let i = 0; i < alphabet.length; i++) {
    if (str.indexOf(alphabet[i]) === -1) {
      result = false;
    }
  }
  return result;
}
