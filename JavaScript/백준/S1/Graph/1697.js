const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [start, end] = input[0].split(" ").map((v) => +v);
let visit = new Array(100000).fill(0);

function bfs(N) {
  const queue = [];
  queue.push([N, 0]);
  visit[N] = 1;
  while (queue.length) {
    const [cur, time] = queue.shift();
    if (cur === end) return time;
    for (next of [cur - 1, cur + 1, cur * 2]) {
      if (!visit[next] && next >= 0 && next <= 100000) {
        visit[next] = 1;
        queue.push([next, time + 1]);
      }
    }
  }
  bfs(N);
}

console.log(bfs(start));
