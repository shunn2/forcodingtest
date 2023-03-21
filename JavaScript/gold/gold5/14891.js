const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
//N->0 S->1
//시계->1 반시계->-1
let arr = [];
let rotate = [];
let temp = [6, 6, 6, 6];
for (let i = 0; i < 4; i++) {
  arr.push(input[i].split("").map((v) => +v));
}
const K = +input[4];
for (let i = 5; i < K + 5; i++) {
  rotate.push(input[i].split(" ").map((v) => +v));
}

function score() {
  return arr[0][0] * 1 + arr[1][0] * 2 + arr[2][0] * 4 + arr[3][0] * 8;
}

const leftScan = (deques, leftNth, rotateList) => {
  const newRotateList = rotateList;
  if (leftNth < 0 || newRotateList[leftNth + 1] === 0) return;
  if (deques[leftNth][2] !== deques[leftNth + 1][6]) {
    newRotateList[leftNth] = -newRotateList[leftNth + 1];
  } else {
    newRotateList[leftNth] = 0;
  }
  return newRotateList;
};

const rightScan = (deques, rightNth, rotateList) => {
  const newRotateList = rotateList;
  if (rightNth > 3 || newRotateList[rightNth - 1] === 0) return;
  if (deques[rightNth][6] !== deques[rightNth - 1][2]) {
    newRotateList[rightNth] = -newRotateList[rightNth - 1];
  } else {
    newRotateList[rightNth] = 0;
  }
  return newRotateList;
};

const solution = (deques, rotateList) => {
  const newDeques = deques;
  rotateList.forEach((rotation, idx) => {
    if (rotation === 1) {
      newDeques[idx].unshift(newDeques[idx].pop());
    }
    if (rotation === -1) {
      newDeques[idx].push(newDeques[idx].shift());
    }
  });
  return newDeques;
};

for (let el of rotate) {
  const nth = el[0] - 1;
  let leftIdx = nth;
  let rightIdx = nth;
  const rotateArr = [0, 0, 0, 0];
  rotateArr[nth] = el[1];
  while (--leftIdx > -1) {
    leftScan(arr, leftIdx, rotateArr);
  }
  while (++rightIdx < 4) {
    rightScan(arr, rightIdx, rotateArr);
  }
  solution(arr, rotateArr);
}
console.log(score(arr));
