const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input[0];
let result = [];
let arr = [];

for (let i = 1; i <= T; i++) {
  let N = input[i];
  arr.push(
    input.splice(i + 1, N).map((item) => item.split(" ").map((v) => +v))
  );
  result.push(solution(arr[i - 1]));
}

function solution(arr) {
  let res = 0;
  arr.sort((a, b) => a[0] - b[0]);
  let prev = arr[0][1];
  for (let i = 1; i < arr.length; i++) {
    if (prev > arr[i][1]) {
      prev = arr[i][1];
      res++;
    }
  }
  return res + 1;
}

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
