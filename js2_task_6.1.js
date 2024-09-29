let number = 12700;
const coupons = [5000, 1000, 500, 100];
let sum = [];
for (let i = 0; i < coupons.length; i++) {
  if (coupons[i] < number) {
    while (coupons[i] <= number) {
      sum.push(coupons[i]);
      number = number - coupons[i];
    }
  }
}
console.log(sum)
