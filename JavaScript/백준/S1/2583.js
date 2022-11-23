const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [m, n, k] = input[0].split(" ").map((v) => +v);

let visited = Array.from(Array(m), () => Array(n).fill(0));
for (let i = 1; i <= k; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map((v) => +v);
  for (let j = x1; j < x2; j++) {
    for (let k = y1; k < y2; k++) {
      visited[k][j] = 1;
    }
  }
}
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
function dfs(start) {
  const s = [start];
  let cnt = 0;
  while (s.length) {
    const [x, y] = s.pop();
    cnt++;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (rangeCheck(nx, ny) && !visited[nx][ny]) {
        visited[nx][ny] = 1;
        s.push([nx, ny]);
      }
    }
  }
  return cnt;
}

const rangeCheck = (i, j) => {
  if (i >= 0 && i < m && j >= 0 && j < n) {
    return true;
  } else return false;
};

const areas = [];
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j]) {
      visited[i][j] = 1;
      areas.push(dfs([i, j]));
    }
  }
}

console.log(areas.length);
console.log(areas.sort((a, b) => a - b).join(" "));
