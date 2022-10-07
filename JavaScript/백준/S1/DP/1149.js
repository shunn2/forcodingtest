const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
let dp = [];
for (let i = 1; i <= N; i++) {
  dp[i - 1] = input[i].split(" ").map((v) => +v);
}
// dp = new Array(N).fill(0);

for (let i = 1; i < N; i++) {
  dp[i][0] += Math.min(dp[i - 1][1], dp[i - 1][2]);
  dp[i][1] += Math.min(dp[i - 1][0], dp[i - 1][2]);
  dp[i][2] += Math.min(dp[i - 1][0], dp[i - 1][1]);
}
console.log(Math.min(...dp[N - 1]));
