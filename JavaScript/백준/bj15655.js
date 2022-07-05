const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

const [N, M] = input[0].split(" ").map((item) => +item);
const arr = input[1].split(" ").map((item) => +item);
arr.sort((a, b) => a - b);
let s = [];

const dfs = (start) => {
  if (s.length === M) {
    console.log(s.join(" "));
    return;
  }
  for (let i = start; i < N; i++) {
    if (!s.includes(arr[i])) {
      s.push(arr[i]);
      dfs(i + 1);
      s.pop();
    }
  }
};
dfs(0);
