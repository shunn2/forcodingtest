const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map((v) => +v);
let dp = Array.from(Array(n + 1), () => new Array(k + 1).fill(0));
for (let i = 1; i <= n; i++) {
  const [w, v] = input[i].split(" ").map((v) => +v);
  for (let j = 0; j <= k; j++) {
    if (j < w) {
      dp[i][j] = dp[i - 1][j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w] + v);
    }
  }
}
console.log(dp[n][k]);
