const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
let arr = input[1].split(" ").map((item) => +item);
let dp = new Array(n).fill(0);
dp[0] = arr[0];
for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      dp[i] = Math.max(dp[i], dp[j] + arr[i]);
    } else {
      dp[i] = Math.max(dp[i], arr[i]);
    }
  }
}
console.log(Math.max(...dp));
