const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

const [N, M] = input[0].split(" ").map((item) => +item);
const arr = input[1].split(" ").map((item) => +item);

let max = Math.max(...arr);
let min = 0;
let mid = 0;
let total = 0;
let answer = 0;

while (min <= max) {
  total = 0;
  mid = Math.floor((max + min) / 2);
  arr.forEach((v) => {
    let rest = v - mid;
    if (rest > 0) total += rest;
  });

  if (total >= M) {
    if (mid > answer) answer = mid;
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}
console.log(answer);

// const fs = require("fs");
// const input = fs
//     .readFileSync("/dev/stdin")
//     .toString()
//     .trim()
//     .split(/\s/)
//     .map(Number);

// const n = input.shift();
// const m = input.shift();

// solution(input);

// function solution(arr) {
//     let lt = 1;
//     let rt = Math.max(...arr);

//     while (lt <= rt) {
//         const mid = ~~((lt + rt) / 2);

//         if (simulation(mid) >= m) lt = mid + 1;
//         else rt = mid - 1;
//     }

//     console.log(rt);

//     function simulation(mid) {
//         let sum = 0;
//         for (const x of arr) {
//             if (mid < x) {
//                 sum += x - mid;
//             }
//         }

//         return sum;
//     }
// }
