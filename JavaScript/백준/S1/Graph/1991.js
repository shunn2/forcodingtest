const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
let tree = {};
for (let i = 1; i < n + 1; i++) {
  const [a, b, c] = input[i].trim().split(" ");
  tree[a] = [b, c];
}

let result = "";

function preorder(node) {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  result += node;
  preorder(lt);
  preorder(rt);
}

function inorder(node) {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  inorder(lt);
  result += node;
  inorder(rt);
}

function postorder(node) {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  postorder(lt);
  postorder(rt);
  result += node;
}

preorder("A");
result += "\n";
inorder("A");
result += "\n";
postorder("A");

console.log(result);

//https://www.acmicpc.net/problem/1991
