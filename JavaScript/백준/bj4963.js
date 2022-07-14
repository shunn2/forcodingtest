const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let idx = 0;
let [w, h] = input[idx++].split(" ").map((item) => +item);

const dfs = (x, y, arr) => {
  const dx = [1, 1, -1, -1, 1, -1, 0, 0];
  const dy = [0, 1, 0, 1, -1, -1, 1, -1];
  arr[x][y] = 0;
  for (let k = 0; k < 8; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];
    if (0 <= nx && nx < h && 0 <= ny && ny <= w && arr[nx][ny] === 1) {
      dfs(nx, ny, arr);
    }
  }
};

while (w !== 0 || h !== 0) {
  let arr = new Array();
  let count = 0;
  for (let i = idx; i < idx + h; i++) {
    arr.push(input[i].split(" ").map((item) => +item));
  }
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (arr[i][j] === 1) {
        dfs(i, j, arr);
        count += 1;
      }
    }
  }
  console.log(count);
  idx += h;
  [w, h] = input[idx++].split(" ").map((item) => +item);
}
