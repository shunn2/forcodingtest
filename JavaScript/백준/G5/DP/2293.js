const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map((v) => +v);
let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(+input[i]);
}
arr.sort();

let dp = new Array(K + 1).fill(0);
dp[0] = 1;

for (let i = 0; i < arr.length; i++) {
  for (let j = arr[i]; j <= K; j++) {
    dp[j] += dp[j - arr[i]];
  }
}
console.log(dp[K]);
//https://www.acmicpc.net/problem/2293
