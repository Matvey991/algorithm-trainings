let a = ["t", "e", "s", "t"];
let x = "e";
for (let i = 0; i < a.length; i++) {
  if (a.includes(x)) {
    console.log(true);
    break;
  } else {
    console.log(false);
    break;
  }
}
