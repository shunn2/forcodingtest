const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const A = input[0];
const B = input[1];
let result = 0;
let dp = Array.from(Array(A.length + 1), () => new Array(B.length + 1).fill(0));

for (let i = 1; i <= A.length; i++) {
  for (let j = 1; j <= B.length; j++) {
    if (A[i - 1] === B[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
    if (dp[i][j] > result) result = dp[i][j];
  }
}

console.log(result);
