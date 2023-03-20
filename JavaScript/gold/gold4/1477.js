const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, L] = input[0].split(" ").map((v) => +v);
let arr = [];
if (N !== 0) arr = input[1].split(" ").map((v) => +v);
arr.push(L);
arr.unshift(0);
arr.sort(function (a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
});

let [start, end] = [1, L - 1];

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let cnt = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] > mid)
      cnt += parseInt((arr[i] - arr[i - 1] - 1) / mid);
  }
  if (cnt > M) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(start);
