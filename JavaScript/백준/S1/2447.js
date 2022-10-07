const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = +input[0];
let idx = n;
let arr = new Array(n).fill(" ");
for (let i = 0; i < n; i++) {
  arr.push(new Array(n).fill(" "));
}

while (idx > 1) {
  for (let i = 0; i < n; i = i * idx) {}
  idx /= 3;
}
