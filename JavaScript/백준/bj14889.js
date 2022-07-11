const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

const n = +input[0];
let arr = new Array(n);
for (let i = 1; i <= n; i++) {
  arr[i - 1] = input[i].split(" ").map((item) => +item);
}

let s = [];
let ans = [];

const dfs = (start) => {
  if (s.length === n / 2) {
    let mem_sum = 0;
    let not_mem = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (s.includes(i) || s.includes(j)) {
          if (s.includes(i) && s.includes(j)) mem_sum += arr[i][j];
        } else {
          not_mem += arr[i][j];
        }
      }
    }
    ans.push(Math.abs(mem_sum - not_mem));
    return;
  }
  for (let k = start; k < n; k++) {
    if (!s.includes(k)) {
      s.push(k);
      dfs(k + 1);
      s.pop();
    }
  }
};
dfs(0);
console.log(Math.min(...ans));
