const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

const dfs = (s, stack, start) => {
  if (stack.length === 6) {
    console.log(stack.join(" "));
    return;
  }
  for (let j = start; j < s.length; j++) {
    if (!stack.includes(s[j])) {
      stack.push(s[j]);
      dfs(s, stack, j + 1);
      stack.pop();
    }
  }
};

for (let i = 0; i < input.length; i++) {
  if (input[i] === "0") {
    break;
  }
  let s = input[i].split(" ").map((item) => +item);
  let k = s.shift();
  let stack = [];
  dfs(s, stack, 0);
  if (input[i + 1] === "0") {
    break;
  }
  console.log("");
}
