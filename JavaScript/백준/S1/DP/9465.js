const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];

for (let i = 0; i < N; i++) {
  let arr = [];
  const TN = +input[i * 3 + 1];
  for (let j = 0; j < 2; j++) {
    arr.push(input[i * 3 + j + 2]);
    arr[j] = arr[j].split(" ").map((v) => +v);
  }
  console.log(sticker(TN, arr));
}

function sticker(n, arr) {
  let dp = [];
  for (let i = 0; i <= n; i++) {
    dp.push([0, 0]);
  }
  dp[1][0] = arr[0][0];
  dp[1][1] = arr[1][0];
  for (let i = 2; i <= n; i++) {
    dp[i][0] = Math.max(dp[i - 1][1], dp[i - 2][1]) + arr[0][i - 1];
    dp[i][1] = Math.max(dp[i - 1][0], dp[i - 2][0]) + arr[1][i - 1];
  }
  return Math.max(...dp[n]);
}

//https://www.acmicpc.net/problem/9465
