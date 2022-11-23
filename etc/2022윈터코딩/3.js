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

const dx = [0, 1, 1, 1, 0, -1, -1, -1];
const dy = [1, 1, 0, -1, -1, -1, 0, 1];
function solution(worldmap) {
  var answer = 0;
  let visited = [...worldmap];
  const N = worldmap.length;
  const M = worldmap[0].length;

  let idx = 8;

  function DFS(visited, idx, x, y) {
    let go = [-1, 0, 1];
    let ans = 0;
    if (x === N && y === M) return ans;
    for (let i = 0; i < 3; i++) {
      idx = (idx + go[i]) % 8;
      const nx = x + dx[idx];
      const ny = y + dx[idx];
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && visited[nx][ny] !== "X") {
        visited[nx][ny] = "X";
        ans++;
        DFS(visited, idx, nx, ny);
      }
      return idx;
    }
  }
  answer = DFS(visited, idx, 0, 0);
  return answer;
}

console.log(solution("..XXX", "..XXX", "...XX", "X....", "XXX.."));
