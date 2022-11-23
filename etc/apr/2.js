const getPriority = (operator, inStack) => {
  if (operator === "+" || operator === "-") {
    return 1;
  } else if (operator === "*") {
    return 2;
  } else if (operator === "(") {
    if (inStack) return 0;
    else return 5;
  } else if (operator === ")") {
    return 4;
  }
};
const infixToPostfix = (infix) => {
  const operators = ["(", ")", "+", "-", "*"];
  const stack = [];
  const postfix = [];

  infix = infix.split("");
  infix.forEach((token) => {
    if (operators.includes(token)) {
      if (token === ")") {
        let popped = stack.pop();
        while (popped !== "(") {
          postfix.push(popped);
          popped = stack.pop();
        }
      } else {
        if (stack.length === 0) {
          stack.push(token);
        } else {
          let popped = stack.pop();
          if (getPriority(popped, true) > getPriority(token, false)) {
            postfix.push(popped);
          } else {
            stack.push(popped);
          }
          stack.push(token);
        }
      }
    } else {
      postfix.push(token);
    }
  });

  while (stack.length !== 0) {
    postfix.push(stack.pop());
  }

  return postfix.join(" ");
};
const calculate = (postfix) => {
  const operators = ["+", "-", "*"];
  const stack = [];

  postfix.split(" ").forEach((token) => {
    if (operators.includes(token)) {
      let operand1 = parseFloat(stack.pop());
      let operand2 = parseFloat(stack.pop());
      let temp;

      if (token === "+") temp = operand2 + operand1;
      else if (token === "-") temp = operand2 - operand1;
      else if (token === "*") temp = operand2 * operand1;
      stack.push(temp);
    } else {
      stack.push(token);
    }
  });

  return stack[0];
};

function solution(expression) {
  var answer = 0;
  let result = [];
  let exp = expression.split("");
  for (let i = 0; i < exp.length; i++) {
    if (!isNaN(exp[i - 1])) continue;
    let first_exp = [...exp];
    first_exp.splice(i, 0, "(");
    for (let j = i + 3; j < exp.length; j++) {
      let second_exp = [...first_exp];
      if (isNaN(exp[j + 1])) {
        second_exp.splice(j, 0, ")");
        second_exp = second_exp.join("");
        result.push(calculate(infixToPostfix(second_exp)));
      }
    }
  }
  console.log(result);
  return Math.max(...result);
}
console.log(solution("2-1*5-4*3+2"));
console.log(solution("2*3-1"));

// console.log(solution("24*3-1"));
