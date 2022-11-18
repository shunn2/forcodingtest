function solution(maps) {
  var answer = -1;
  let visited = Array.from(Array(maps.length), () =>
    Array(maps[0].length).fill(0)
  );
  let result = [0];
  let temp_result = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      for (let k = 0; k < 4; k++) {}
      if (maps[i][j] === 1) {
        maps[i][j] = 4;
      }
    }
  }
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] && visited[i][j] == 0) {
        temp_result = 0;
        DFS(i, j, maps.length, maps[0].length);
        result.push(temp_result);
      }
    }
  }
  function DFS(x, y, M, N) {
    visited[x][y] = 1;
    temp_result += checkAround(maps, x, y, M, N);
    for (let i = 0; i < 4; i++) {
      let ax = x + dx[i];
      let ay = y + dy[i];
      if (ax >= 0 && ay >= 0 && ax < M && ay < N) {
        if (visited[ax][ay] == 0 && maps[ax][ay]) {
          DFS(ax, ay, M, N);
        }
      }
    }
  }
  //   function DFS(x, y, M, N) {
  //     let dx = [-1, 0, 1, 0];
  //     let dy = [0, 1, 0, -1];
  //     visited[x][y] = 1;
  //     for (let i = 0; i < 4; i++) {
  //       let ax = x + dx[i];
  //       let ay = y + dy[i];
  //       if (ax >= 0 && ay >= 0 && ax < M && ay < N) {
  //         if (visited[ax][ay] == 0 && maps[ax][ay]) {
  //           maps[x][y] -= 1;
  //           maps[ax][ay] -= 1;
  //           DFS(ax, ay, M, N);
  //         }
  //       }
  //     }
  //   }
  function checkAround(maps, x, y, M, N) {
    let temp = 4;
    for (let i = 0; i < 4; i++) {
      let ax = x + dx[i];
      let ay = y + dy[i];
      if (ax >= 0 && ay >= 0 && ax < M && ay < N && maps[ax][ay] !== 0) {
        temp -= 1;
      }
    }
    return temp;
  }
  answer = Math.max(...result);
  return answer;
}

// console.log(
//   solution([
//     [0, 0, 1, 0, 0],
//     [0, 1, 1, 0, 1],
//     [0, 0, 1, 0, 1],
//     [1, 1, 1, 0, 1],
//   ])
// );
console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);
// console.log(
//   solution([
//     [0, , 1, 1],
//     [0, 1, 1, 1],
//     [1, 1, 0, 1],
//     [1, 1, 0, 0],
//   ])
// );
