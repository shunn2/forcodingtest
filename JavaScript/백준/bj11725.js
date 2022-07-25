const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];

graph = Array.from(Array(n + 1), () => new Array());

for (let i = 1; i < input.length; i++) {
  let [x, y] = input[i].split(" ").map((el) => Number(el));
  graph[x].push(y);
  graph[y].push(x);
}

let visited = new Array(n + 1).fill(false);
let queue = [1];
let parent = new Array(n + 1);

while (queue.length) {
  let tmp = queue.shift();
  for (let j of graph[tmp]) {
    if (!visited[j]) {
      visited[j] = true;
      parent[j] = tmp;
      queue.push(j);
    }
  }
}
for (let k = 2; k < n + 1; k++) {
  console.log(parent[k]);
}