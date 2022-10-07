const discount = [0.4, 0.3, 0.2, 0.1];
//이모티콘 별로 할인율이 다르다.
function solution(users, emoticons) {
  var answer = [0, 0];
  let emoticons_sum = emoticons.reduce((acc, cur) => acc + cur, 0);
  emoticons_sum = emoticons_sum * 0.4;
  for (let i = 0; i < users.length; i++) {
    if (users[i][1] > emoticons_sum) {
      answer[0] += 1;
    }
  }
  console.log(answer);
  return answer;
}

solution(
  [
    [40, 10000],
    [25, 10000],
  ],
  [7000, 9000]
);
