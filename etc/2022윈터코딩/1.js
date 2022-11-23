function solution(line) {
  var answer = "";
  let prevWord = line[0];
  let isDuplicate = 0;
  answer += line[0];
  line += " ";
  for (let i = 1; i < line.length; i++) {
    if (prevWord === line[i]) {
      isDuplicate = 1;
    } else {
      if (isDuplicate) answer += "*";
      isDuplicate = 0;
      answer += line[i];
    }
    prevWord = line[i];
  }
  if (answer[answer.length - 1] === " ") answer = answer.slice(0, -1);
  return answer;
}
console.log(solution("aabbaabbaabbb"));
