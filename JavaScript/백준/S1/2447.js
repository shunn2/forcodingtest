const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = +input[0];
let idx = n;
let arr = new Array(n).fill(" ");
for (let i = 0; i < n; i++) {
  arr.push(new Array(n).fill(" "));
}

function drawingStar(n, x, y) {
  if (n > 3) {
    drawingStar(n / 3, x, y);
  } else {
    if (n === 1) return;
    if (x >= n) {
      drawingStar(n, 0, y + 3);
    } else {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (i === 1 && j === 1) continue;
          arr[i][j] = "*";
        }
      }
      drawingStar(n, x + 3, y);
    }
  }
}

drawingStar(n, 0, 0);
console.log(arr);
