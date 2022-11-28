const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((v) => +v);
let chicken = [];
let home = [];
let answer = [];
for (let i = 1; i <= N; i++) {
  let temp = input[i].split(" ").map((v) => +v);
  for (let j = 0; j < N; j++) {
    if (temp[j] === 1) home.push([i, j + 1]);
    if (temp[j] === 2) chicken.push([i, j + 1]);
  }
}

function getDistance(start, dest) {
  let x = Math.abs(start[0] - dest[0]);
  let y = Math.abs(start[1] - dest[1]);
  return x + y;
}

function recursion(arr, idx) {
  if (arr.length === M) {
    let sum = 0;
    for (let i = 0; i < home.length; i++) {
      let min = N * N;
      for (let j = 0; j < arr.length; j++) {
        min = Math.min(min, getDistance(home[i], arr[j]));
      }
      sum += min;
    }
    answer.push(sum);
    return;
  }
  for (let k = idx; k < chicken.length; k++) {
    arr.push(chicken[k]);
    recursion(arr, k + 1);
    arr.pop();
  }
}

recursion([], 0);

console.log(Math.min(...answer));
