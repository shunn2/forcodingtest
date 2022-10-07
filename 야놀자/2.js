const S = "aaabbcc";
const C = [10, 7, 8, 5, 10, 5, 10];

// let stringSet = new Set(S);
// let setArr = Array.from(stringSet);
// let total = 0;

// for (let i = 0; i < setArr.length; i++) {
//   let cost = [];
//   let count = 0;
//   for (let j = 0; j < S.length; j++) {
//     if (setArr[i] === S[j]) {
//       count++;
//       cost.push(C[j]);
//     }
//   }
//   if (count > 1) {
//     let cost_sum = cost.reduce((acc, cur) => {
//       return acc + cur;
//     });
//     total = total + cost_sum - Math.max(...cost);
//   }
// }

// console.log(total);

let lastLetter = S[0];
let costIdx = [];
let total = 0;
for (let i = 1; i < S.length; i++) {
  if (lastLetter === S[i]) {
    costIdx.push(i);
  }
  lastLetter = S[i];
}
for (let i = 0; i < costIdx.length; i++) {
  if (C[costIdx[i]] >= C[costIdx[i] - 1]) {
    total += C[costIdx[i]];
  } else {
    total += C[costIdx[i] - 1];
  }
}

console.log(total);
