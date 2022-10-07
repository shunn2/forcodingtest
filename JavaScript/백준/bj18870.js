const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
let arr = input[1].split(" ").map((item) => +item);

let set = new Set(arr);
let uniq = [...set].sort((a, b) => a - b);
let dic = {};

uniq.forEach((e, idx) => {
  dic[e] = idx;
});

let ans = "";
for (let i = 0; i < N; i++) {
  ans += dic[arr[i]] + " ";
}
console.log(ans);
