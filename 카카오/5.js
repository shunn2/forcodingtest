let arr = new Array(50);
let mergeState = [];
for (let i = 0; i < 50; i++) {
  arr[i] = new Array(50);
}

function Update1(r, c, value) {
  for (let i = 0; i < mergeState.length; i++) {
    if (mergeState[i].indexOf([r, c]) !== -1) {
      for (let j = 0; j < mergeState[i].length; j++) {
        arr[mergeState[i][j][0] - 1][mergeState[i][j][1] - 1] = value;
      }
    }
  }
  arr[r - 1][c - 1] = value;
}
function Update2(value1, value2) {
  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 50; j++) {
      if (arr[i][j] === value1) {
        arr[i][j] = value2;
      }
    }
  }
}
function Merge(r1, c1, r2, c2) {
  mergeState.push([
    [r1, c1],
    [r2, c2],
  ]);
  if (arr[r1 - 1][c1 - 1] === undefined || arr[r2 - 1][c2 - 1] === undefined) {
    if (arr[r1 - 1][c1 - 1] !== undefined) {
      arr[r2 - 1][c2 - 1] = arr[r1 - 1][c1 - 1];
    } else {
      arr[r1 - 1][c1 - 1] = arr[r2 - 1][c2 - 1];
    }
  } else {
    arr[r2 - 1][c2 - 1] = arr[r1 - 1][c1 - 1];
  }
}
function UnMerge(r, c) {
  for (let i = 0; i < mergeState.length; i++) {
    let index1 = mergeState[i].indexOf([r, c]);
    if (index1 !== -1) {
      mergeState[i].splice(index1, 1);
      for (let j = 0; j < mergeState[j].length; j++) {
        arr[mergeState[i][j][0] - 1][mergeState[i][j][1] - 1] = undefined;
      }
    }
  }
}
function Print(r, c) {
  if (arr[r - 1][c - 1] === undefined) {
    return "EMPTY";
  }
  return arr[r - 1][c - 1];
}
function solution(commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    let com = commands[i].split(" ");
    if (com[0] === "UPDATE") {
      if (com.length === 4) {
        Update1(com[1], com[2], com[3]);
      } else {
        Update2(com[1], com[2]);
      }
    }
    if (com[0] === "MERGE") {
      Merge(com[1], com[2], com[3], com[4]);
    }
    if (com[0] === "UNMERGE") {
      UnMerge(com[1], com[2]);
    }
    if (com[0] === "PRINT") {
      answer.push(Print(com[1], com[2]));
    }
  }
  return answer;
}

solution(["UPDATE 1 1 mneu", ""]);
