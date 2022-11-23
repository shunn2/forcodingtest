function solution(today, terms, privacies) {
  var answer = [];
  let splitTerms = {};
  let splitPrivacies = [];
  for (let i = 0; i < terms.length; i++) {
    const [term, month] = terms[i].split(" ");
    splitTerms[term] = month;
  }
  for (let i = 0; i < privacies.length; i++) {
    const [date, p_term] = privacies[i].split(" ");
    const [year, month, day] = date.split(".");
    splitPrivacies.push([year, month, day, p_term]);
  }
  for (let i = 0; i < splitPrivacies.length; i++) {
    let expire_month = parseInt(splitTerms[splitPrivacies[i][3]]);
    splitPrivacies[i][1] = parseInt(splitPrivacies[i][1]) + expire_month;
    while (splitPrivacies[i][1] > 12) {
      splitPrivacies[i][0] = parseInt(splitPrivacies[i][0]) + 1;
      splitPrivacies[i][1] = splitPrivacies[i][1] - 12;
    }
    splitPrivacies[i][2] = parseInt(splitPrivacies[i][2]) - 1;
    if (splitPrivacies[i][2] < 1) {
      splitPrivacies[i][2] += 28;
      splitPrivacies[i][1] -= 1;
      if (splitPrivacies[i][1] < 1) {
        splitPrivacies[i][0] = parseInt(splitPrivacies[i][0]) - 1;
        splitPrivacies[i][1] += 12;
      }
    }
    let expire_date = "";
    for (let j = 0; j < 3; j++) {
      if (String(splitPrivacies[i][j]).length === 1) {
        splitPrivacies[i][j] = "0" + String(splitPrivacies[i][j]);
      }
      expire_date += splitPrivacies[i][j];
      if (j !== 2) {
        expire_date += ".";
      }
    }
    if (expire_date < today) {
      answer.push(i + 1);
    }
    console.log(today, expire_date);
  }
  console.log(answer);
  return answer;
}

solution(
  "2020.01.01",
  ["Z 3", "D 5"],
  [
    "2019.10.01 Z",
    "2019.11.15 Z",
    "2019.08.02 D",
    "2019.07.01 D",
    "2018.12.28 Z",
  ]
);
