const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const vowel = ["a", "e", "i", "o", "u"];
const [L, C] = input[0].split(" ").map((v) => +v);
let alphabet = input[1].split(" ").sort();
let ans = [];
function recursion(str, idx) {
  if (str.length === L) {
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowel.includes(str[i])) cnt++;
    }
    if (cnt > 0 && L - cnt > 1) {
      ans.push(str);
    }
    return;
  }
  for (let i = idx; i < C; i++) {
    recursion(str + alphabet[i], i + 1);
  }
}

recursion("", 0);

console.log(ans.join("\n"));
