const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = +input[0];
let dp = new Array(n + 1);
dp[0] = 0;
dp[1] = 1;
for (let i = 2; i < n + 1; i++) {
  dp[i] = i;
  for (let j = 1; j * j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
  }
}
console.log(dp[n]);
