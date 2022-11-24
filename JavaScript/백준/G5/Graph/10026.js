const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];

let arr = [];
let abnormal = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(""));
  abnormal.push(
    input[i].split("").map((v) => {
      if (v === "G") return "R";
      else return v;
    })
  );
}

let visited = Array.from(Array(N), () => new Array(N).fill(0));
const isSameColor = (a, b) => {
  if (a === b) return true;
  return false;
};
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const DFS = (x, y, visited, arr) => {
  const myColor = arr[x][y];
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
      const nextColor = arr[nx][ny];
      if (isSameColor(myColor, nextColor)) {
        visited[nx][ny] = 1;
        DFS(nx, ny, visited, arr);
      }
    }
  }
};
const BFS = (start, visited) => {
  let q = [];
  q.push(start);
  while (q.length) {
    let cur = q.shift();
    for (let i = 0; i < 4; i++) {
      let nx = cur[0] + dx[i];
      let ny = cur[1] + dy[i];
      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < N &&
        !visited[nx][ny] &&
        arr[cur[0]][cur[1]] === arr[nx][ny]
      ) {
        visited[nx][ny] = 1;
        q.push([nx, ny]);
      }
    }
  }
};
let cnt = 0;
let abcnt = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      visited[i][j] = 1;
      DFS(i, j, visited, arr);
      cnt++;
    }
  }
}
visited = Array.from(Array(N), () => new Array(N).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      visited[i][j] = 1;
      DFS(i, j, visited, abnormal);
      abcnt++;
    }
  }
}
console.log(cnt, abcnt);
