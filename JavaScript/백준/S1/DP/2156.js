const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
let arr = input.map((v) => +v);

let dp = new Array(n + 1).fill(0);

dp[1] = arr[0];
dp[2] = arr[0] + arr[1];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    dp[i - 3] + arr[i - 1] + arr[i - 2],
    dp[i - 2] + arr[i - 1]
  );
}

console.log(dp[n]);

/**
 * dp[n-3] + (n-1) + n
 * dp[n-2] + n
 * dp[n-1]
 */

//https://www.acmicpc.net/problem/2156
