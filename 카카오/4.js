function getCompleteBinary(binary) {
  let index = 0;
  let acc = 1;
  while (binary.length !== acc) {
    if (binary.length > acc) {
      index += 1;
      acc = acc + 2 ** index;
      continue;
    }
    for (let i = 0; i <= acc - binary.length; i++) {
      binary = "0" + binary;
    }
  }
  return binary;
}

function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    let binary_num = numbers[i].toString(2);
    let result = 1;
    let complete_binary = getCompleteBinary(binary_num);
    for (let i = 0; i < complete_binary.length; i++) {
      if ((i + 1) % 2 === 0 && complete_binary[i] === "0") {
        result = 0;
      }
    }
    answer.push(result);
  }
  console.log(answer);
  return answer;
}
solution([63, 111, 95, 7, 5]);

/**
 * 1
 * 3
 * 7
 * 15
 * 31
 */
