const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, w, L] = input[0].split(" ").map((v) => +v);
let arr = input[1].split(" ").map((v) => +v);
let q = new Array(w).fill(0);
let a = arr.shift();
let weight = a;
q.shift();
q.push(a);
let result = 0;

while (arr.length || weight > 0) {
  result += 1;
  if (weight - q[0] + arr[0] > L) {
    weight -= q.shift();
    q.push(0);
    continue;
  }
  weight -= q.shift();
  let temp = arr.shift();
  weight += temp;
  q.push(temp);
}

console.log(result + w);
