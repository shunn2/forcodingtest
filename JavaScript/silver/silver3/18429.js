const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map((v) => +v);
let arr = input[1].split(" ").map((v) => Number(v - K));

let result = 0;
let visited = new Array(N).fill(false);

function dfs(day, total) {
  if (total < 0) return;
  if (day === N) {
    result += 1;
    return;
  }
  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    dfs(day + 1, total + arr[i]);
    visited[i] = false;
  }
}

dfs(0, 0);
console.log(result);
