const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

const T = +input[0];
for (let i = 1; i <= T; i++) {
  const arr = input[i].split(" ").map((item) => +item);
  let sum = 0;
  const arrLength = arr[0];
  for (let i = 1; i <= arrLength; i++) {
    sum += arr[i];
  }
  const average = sum / arrLength;
  let good = 0;
  for (let i = 1; i <= arrLength; i++) {
    if (arr[i] > average) {
      good++;
    }
  }
  const answer = ((good / arrLength) * 100).toFixed(3);
  console.log(answer + "%");
}
