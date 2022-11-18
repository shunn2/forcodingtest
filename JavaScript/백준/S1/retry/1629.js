const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b, c] = input[0].split(" ").map((v) => +v);

const pow = (a, b, c) => {
  if (b == 0) {
    return BigInt(1);
  }

  const temp = pow(a, BigInt(parseInt(b / BigInt(2))), c);
  if (b % BigInt(2)) {
    return (((temp * temp) % c) * a) % c;
  } else {
    return (temp * temp) % c;
  }
};
console.log(Number(pow(a, b, c)));
//https://www.acmicpc.net/problem/1629
