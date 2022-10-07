function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(parseInt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function changeNum(num, k) {
  return num.toString(k);
}

function solution(n, k) {
  var answer = 0;
  let temps = [];
  let changedNum = changeNum(n, k);
  let temp = "";
  for (let i = 0; i < changedNum.length; i++) {
    if (changedNum[i] !== "0") {
      temp += changedNum[i];
      if (i !== changedNum.length - 1) {
        continue;
      }
    }
    if (temp !== "" && isPrime(parseInt(temp))) answer += 1;
    temp = "";
  }
  return answer;
}

//==========================================================
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const solution = (n, k) => {
  return n
    .toString(k)
    .split("0")
    .map((m) => Number(m))
    .filter((f) => isPrime(f)).length;
};
