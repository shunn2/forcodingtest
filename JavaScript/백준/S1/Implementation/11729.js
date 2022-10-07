const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
let count = 0;
let answer = [];

function hanoi(num, from, other, to) {
  if (num === 0) {
    return;
  } else {
    hanoi(num - 1, from, to, other);
    count++;
    answer.push([from, to]);
    hanoi(num - 1, other, from, to);
  }
}

hanoi(n, 1, 2, 3);
console.log(count);

answer.forEach((v) => {
  console.log(v[0], v[1]);
});

//https://www.acmicpc.net/problem/11729
