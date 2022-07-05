const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

const t = +input[0];

const getGCD = (num1, num2) => {
  if (num2 === 0) return num1;
  return num1 > num2 ? getGCD(num2, num1 % num2) : getGCD(num1, num2 % num1);
};

for (let i = 1; i <= t; i++) {
  const arr = input[i].split(" ").map((item) => +item);
  let n = arr[0];
  let sum = 0;
  for (let j = 1; j < n; j++) {
    for (let k = j + 1; k <= n; k++) {
      let gcd = getGCD(+arr[j], +arr[k]);
      sum += gcd;
    }
  }
  console.log(sum);
}
