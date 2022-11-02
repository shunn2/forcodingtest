const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const TC = +input[0];

const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
const dy = [1, 2, 2, 1, -1, -2, -2, -1];

function bfs(start, target, size) {
  let queue = [];
  queue.push([start[0], start[1]]);
  let visited = Array.from(Array(size), () => new Array(size).fill(0));
  visited[start[0]][start[1]] = 0;
  while (queue.length) {
    let cur = queue.shift();
    if (cur[0] === target[0] && cur[1] === target[1]) {
      return visited[target[0]][target[1]];
    }
    for (let j = 0; j < 8; j++) {
      const [nx, ny] = [cur[0] + dx[j], cur[1] + dy[j]];

      if (nx >= 0 && ny >= 0 && nx < size && ny < size) {
        if (!visited[nx][ny]) {
          visited[nx][ny] = visited[cur[0]][cur[1]] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
}

for (let i = 0; i < TC; i++) {
  const size = +input[i * 3 + 1];
  let start = input[i * 3 + 2].split(" ").map((v) => +v);
  let target = input[i * 3 + 3].split(" ").map((v) => +v);
  console.log(bfs(start, target, size));
}
/**
 * 최단거리니까 visitied에 최단 거리를 저장해서 활용할 생각!
 */
