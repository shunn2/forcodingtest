const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
let dp = Array.from(Array(1000), () => new Array(10).fill(0));
for (let i = 0; i < 10; i++) {
  dp[0][i] = 1;
}
for (let i = 1; i < N; i++) {
  for (let j = 0; j < 10; j++) {
    let idx = 0;
    while (idx <= j) {
      dp[i][j] += dp[i - 1][idx] % 10007; //안 나누고 저장하면 오버플로우 나는 듯.
      idx++;
    }
  }
}
const result = dp[N - 1].reduce((acc, cur) => acc + cur);
console.log(result % 10007);
//https://www.acmicpc.net/problem/11057
