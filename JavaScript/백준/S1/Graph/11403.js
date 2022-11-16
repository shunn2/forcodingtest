const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
let graph = [];
let q = [];

for (let i = 1; i <= N; i++) {
  graph.push(input[i].split(" ").map((v) => +v));
}
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j]) {
      q.push([i, j]);
    }
  }
}
function bfs() {
  while (q.length) {
    const [a, b] = q.shift();
    for (let i = 0; i < N; i++) {
      if (graph[b][i] === 1) {
        graph[a][i] = 1;
      }
      if (graph[i][a] === 1) {
        graph[i][b] = 1;
      }
    }
  }
}

function printGraph() {
  for (let i = 0; i < N; i++) {
    console.log(graph[i].join(" "));
  }
}

bfs();
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j]) {
      q.push([i, j]);
    }
  }
}
bfs();
printGraph();
//https://www.acmicpc.net/problem/11403
