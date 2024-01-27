const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input[0];

const output = (M, N, x, y) => {
  const lcm = (M * N) / getGCD(M, N);
  let year;
  for (let i = x; i <= lcm; i += M) {
    if (((i - 1) % N) + 1 === y) {
      year = i;
      break;
    }
  }
  return year ? year : -1;
};

const getGCD = (a, b) => {
  let x = Math.max(a, b);
  let y = Math.min(a, b);
  let remainder;
  while (y) {
    remainder = x % y;
    x = y;
    y = remainder;
  }
  return x;
};

for (let i = 1; i <= T; i++) {
  const [M, N, x, y] = input[i].split(" ").map((v) => +v);

  console.log(output(M, N, x, y));
}
