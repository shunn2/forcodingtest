const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

const [n, s] = input[0].split(" ").map((v) => +v);
let arr = input[1].split(" ").map((v) => +v);

let stack = [];
let count = 0;
const dfs = (start) => {
  if (stack.length > 0) {
    if (stack.reduce((acc, cur) => acc + cur) === s) {
      count += 1;
    }
  }
  for (let i = start; i < n; i++) {
    stack.push(arr[i]);
    dfs(i + 1);
    stack.pop();
  }
};

dfs(0);
console.log(count);
