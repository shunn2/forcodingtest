const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
let num = input[1].split(" ").map((v) => +v);
let op = input[2].split(" ").map((v) => +v);

let min = 1000000000;
let max = -1000000000;

//init
dfs(0, num[0]);
console.log(`${max}\n${min}`);

function dfs(cnt, val) {
  const originVal = val;

  if (cnt === n - 1) {
    if (val > max) max = val;
    if (val < min) min = val;
    return;
  } else {
    for (let i = 0; i < 4; i++) {
      if (op[i] > 0) {
        switch (i) {
          case 0:
            val += num[cnt + 1];
            break;
          case 1:
            val -= num[cnt + 1];
            break;
          case 2:
            val *= num[cnt + 1];
            break;
          case 3:
            if (val >= 0) {
              val = Math.floor(val / num[cnt + 1]);
            } else {
              val = Math.floor((-1 * val) / num[cnt + 1]);
              if (val > 0) val = val * -1; // -0이 나올 수도 있기 때문에
            }
            break;
        }

        op[i]--;
        dfs(cnt + 1, val);
        val = originVal;
        op[i]++;
      }
    }
  }
  return;
}
