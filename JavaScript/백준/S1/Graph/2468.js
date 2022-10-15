const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map((v) => +v));
}

const offsetX = [0, 0, -1, 1];
const offsetY = [-1, 1, 0, 0];

function DFS(x, y, height, visited) {
  for (let i = 0; i < 4; i++) {
    const nx = x + offsetX[i];
    const ny = y + offsetY[i];
    if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
      visited[nx][ny] = true;
      DFS(nx, ny, height, visited);
    }
  }
}

let max = 0;
for (let h = 0; h <= 100; h++) {
  let count = 0;
  const visited = [...Array(N)].map((_, x) =>
    [...Array(N)].map((_, y) => arr[x][y] <= h)
  );
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        visited[i][j] = true;
        DFS(i, j, h, visited);
        count++;
      }
    }
  }
  max = Math.max(max, count);
}

console.log(max);
