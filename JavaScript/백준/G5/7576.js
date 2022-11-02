const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input[0].split(" ").map((v) => +v);
let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map((v) => +v));
}
let result = 0;

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let queue = [];
let visited = Array.from(Array(N), () => Array(M).fill(0));
arr.forEach((el, i) => {
  el.forEach((tomato, idx) => {
    if (tomato === 1) {
      queue.push([i, idx]);
    } else if (tomato === -1) {
      visited[i][idx] = 1;
    }
  });
});

let idx = 0;

function bfs() {
  while (queue.length !== idx) {
    let iter = queue.length - idx;
    let isChange = 0;
    for (let i = 0; i < iter; i++) {
      //   const [x, y] = queue.shift();
      const [x, y] = queue[idx];
      visited[x][y] = 1;
      for (let j = 0; j < 4; j++) {
        const [nx, ny] = [x + dx[j], y + dy[j]];
        if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
          if (!visited[nx][ny]) {
            visited[nx][ny] = 1;
            queue.push([nx, ny]);
            isChange = 1;
          }
        }
      }
      idx++;
    }
    if (!isChange) break;
    result++;
  }
}

let isPossible = 0;

for (let i = 0; i < N; i++) {
  if (arr[i].includes(0)) {
    isPossible = 1;
    break;
  }
}

bfs();

function checkArr() {
  for (let i = 0; i < N; i++) {
    if (visited[i].includes(0)) {
      return -1;
    }
  }
  return result;
}
console.log(isPossible === 0 ? 0 : checkArr());
