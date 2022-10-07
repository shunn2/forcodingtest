const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
let arr = input[1].split(" ").map((item) => +item);

function getDecreaseArr(arr) {
  let dp = new Array(N + 1).fill(0);
  for (let i = 0; i < N; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        max = Math.max(dp[j], max);
      }
    }
    dp[i] = max + 1;
  }
  return dp;
}
console.log(Math.max(...getDecreaseArr(arr)));
