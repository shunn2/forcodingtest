const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

//0개 -> 3개    1개 -> 2개(왼쪽, 오른쪽)
const N = +input[0];
let arr = Array.from(Array(N), () => new Array());
arr[0] = [1, 1, 1];

for (let i = 1; i < N; i++) {
  const empty = (arr[i - 1][0] + arr[i - 1][1] + arr[i - 1][2]) % 9901;
  const left = (arr[i - 1][0] + arr[i - 1][2]) % 9901;
  const right = (arr[i - 1][0] + arr[i - 1][1]) % 9901;
  arr[i] = [empty, left, right];
}

console.log((arr[N - 1][0] + arr[N - 1][1] + arr[N - 1][2]) % 9901);

// https://my-coding-notes.tistory.com/264
