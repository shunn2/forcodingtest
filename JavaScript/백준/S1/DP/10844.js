const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];

let dp = [[0, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

for (let i = 1; i < n; i++) {
  dp[i] = new Array(10).fill(0);
  for (let j = 0; j <= 9; j++) {
    dp[i][j] = ((dp[i - 1][j - 1] || 0) + (dp[i - 1][j + 1] || 0)) % 1000000000;
  }
}

const res = dp[n - 1].reduce((acc, cur) => {
  return (acc + cur) % 1000000000;
}, 0);

console.log(res);

//https://www.acmicpc.net/problem/10844
