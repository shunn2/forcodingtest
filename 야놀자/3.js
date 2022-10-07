const T = [];
const A = [];

let total = 1;
let pre = [0];

for (let i = 0; i < A.length; i++) {
  let required = T[A[i]];
  while (pre.includes(required)) {
    required = T[required];
    total += 1;
    pre.push(required);
  }
}

console.log(total);
