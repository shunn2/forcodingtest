const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
let arr = new Array();
for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map((v) => +v));
}
for (let i = 1; i < N; i++) {
  for (let j = 0; j <= i; j++) {
    let prev;
    if (j === 0) prev = arr[i - 1][j];
    else if (j === i) prev = arr[i - 1][j - 1];
    else prev = Math.max(arr[i - 1][j - 1], arr[i - 1][j]);
    arr[i][j] += prev;
  }
}
console.log(Math.max(...arr[N - 1]));
