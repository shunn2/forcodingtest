function checkFirstCategory(phone_arr) {
  let result = 1;
  for (let i = 0; i < phone_arr.length; i++) {
    if (i === 0 && phone_arr[i] !== "010") result = 0;
    if (i !== 0 && (isNaN(Number(phone_arr[i])) || phone_arr[i].length !== 4)) {
      result = 0;
    }
  }
  return result;
}

function checkSecondCategory(phone_arr) {
  if (phone_arr[0].slice(0, 3) !== "010") return 0;
  if (phone_arr[0].length !== 11) return 0;
  if (isNaN(Number(phone_arr[0]))) return 0;
  return 1;
}

function checkThirdCategory(phone_arr) {
  if (phone_arr[0] !== "+82") return 0;
  if (phone_arr[1] !== "10") return 0;
  for (let i = 2; i < phone_arr.length; i++) {
    if (phone_arr[i].length !== 4) return 0;
    if (isNaN(Number(phone_arr[i]))) return 0;
  }
  return 1;
}

function solution(phone_number) {
  var answer = -1;
  let phone_arr = phone_number.split("-");
  if (phone_arr.length === 1 && checkSecondCategory(phone_arr)) answer = 2;
  if (phone_arr.length === 3 && checkFirstCategory(phone_arr)) answer = 1;
  if (phone_arr.length === 4 && checkThirdCategory(phone_arr)) answer = 3;
  return answer;
}

console.log(solution("010-1234-5678"));

/**
 * - 기준으로 나눠서 length가 1이면 유형 2로, 3개면 유형 1, 4개면 유형 3, 아니면 유형-1
 * 1: 010시작, 4개, 4개
 * 2: 앞 3개 010, 숫자로 8개
 * 3: 앞 3개 +82, 10, 4개 4개
 */
