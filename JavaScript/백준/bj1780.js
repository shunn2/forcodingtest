const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map((item) => +item));
}

const countPaper = (n) => {
  const count = [0, 0, 0];
  const recursion = (n, x, y) => {
    const num = arr[y][x];
    let numCount = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (arr[y + j][x + i] === num) numCount++;
        else break;
      }
    }
    if (numCount === n * n) count[num + 1]++;
    else {
      n /= 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          recursion(n, x + i * n, y + j * n);
        }
      }
    }
  };
  recursion(n, 0, 0);
  console.log(count.join("\n"));
};

countPaper(n);
