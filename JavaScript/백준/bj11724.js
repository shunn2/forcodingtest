const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

const [N, M] = input[0].split(" ").map((item) => +item);

let graph = new Array(N + 1);
for (let i = 1; i <= N; i++) {
  graph[i] = new Array();
}

for (let i = 1; i <= M; i++) {
  let [a, b] = input[i].split(" ").map((item) => +item);
  graph[a].push(b);
  graph[b].push(a);
}

visited = new Array(N + 1).fill(false);
count = 0;

const dfs = (start) => {
  visited[start] = true;
  for (let i = 0; i < graph[start].length; i++) {
    const next = graph[start][i];
    if (!visited[next]) {
      dfs(next);
    }
  }
};

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    if (graph[i].length === 0) {
      count += 1;
      visited[i] = true;
    } else {
      dfs(i);
      count += 1;
    }
  }
}

console.log(count);
