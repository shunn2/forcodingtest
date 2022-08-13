const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
let arr = [];
let visited = new Array(0);

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split("").map((item) => +item));
  visited.push(new Array(n).fill(0));
}

const bfs = (y, x) => {
  let cnt = 1;
  const queue = [];
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];
  visited[y][x] = 1;
  queue.push({ x: x, y: y });
  while (queue.length > 0) {
    const { x, y } = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nextX = x + dx[i];
      const nextY = y + dy[i];
      if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < n) {
        if (arr[nextY][nextX] === 1 && visited[nextY][nextX] === 0) {
          visited[nextY][nextX] = 1;
          queue.push({ x: nextX, y: nextY });
          cnt++;
        }
      }
    }
  }
  return cnt;
};

const answer = [];
let cnt = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] === 1 && visited[i][j] === 0) {
      answer.push(bfs(i, j));
      cnt++;
    }
  }
}
console.log(cnt);
answer
  .sort((a, b) => a - b)
  .forEach((el) => {
    console.log(el);
  });
