const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

const [n, k] = input[0].split(" ").map((item) => +item);

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(+input[i]);
}

let max = Math.max(...arr);
let min = 1;
let ans = 0;
while (min <= max) {
  let mid = parseInt((max + min) / 2);
  let num = arr.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);
  if (num >= k) {
    if (mid > ans) ans = mid;
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}
console.log(ans);
