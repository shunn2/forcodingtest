const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ").map((v) => +v);
  let distance = y - x;
  let cnt;
  if (Math.sqrt(distance) % 1 === 0) {
    cnt = 2 * Math.sqrt(distance) - 1;
  } else {
    let a = Math.pow(Math.ceil(Math.sqrt(distance)), 2);
    let b = Math.pow(Math.ceil(Math.sqrt(distance)) - 1, 2) + 1;
    if ((a + b) / 2 <= distance) {
      cnt = 2 * Math.ceil(Math.sqrt(distance)) - 1;
    } else {
      cnt = 2 * Math.ceil(Math.sqrt(distance)) - 2;
    }
  }
  console.log(cnt);
}
/**
 * 제곱수: (자신의 제곱근) + (자신의 제곱근 - 1)
 * 제곱수 아님: 자신보다 작은 제곱수 초과 자신보다 바로 큰 제곱수 이하 범위내에서 중간값보다 같거나 크다면 자신보다 바로 큰 제곱수의 총 기계 작동 횟수와 같고, 중간값보다 작다면 반대의 경우보다 1을 더 빼준다.
 */

//https://www.acmicpc.net/problem/1011
