const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i].split("").map((v) => +v));
}
let result = [];

function recursionQuad(N, x, y) {
  let total = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      total += arr[i + x][j + y];
    }
  }
  if (total === 0) result.push(0);
  else if (total === N * N) result.push(1);
  else {
    N = N / 2;
    result.push("(");
    recursionQuad(N, x, y);
    recursionQuad(N, x, y + N);
    recursionQuad(N, x + N, y);
    recursionQuad(N, x + N, y + N);
    result.push(")");
  }
}

recursionQuad(N, 0, 0);
console.log(result.join(""));
