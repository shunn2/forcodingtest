const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

const t = +input[0];

const isPrime = (num) => {
  let prime = true;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      prime = false;
      return prime;
    }
  }
  return prime;
};

for (let i = 1; i <= t; i++) {
  const n = +input[i];
  let a = n / 2;
  let b = n / 2;
  while (isPrime(a) == false || isPrime(b) == false) {
    a -= 1;
    b += 1;
  }
  console.log(a, b);
}
