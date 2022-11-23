// function createObj(n) {
//   let obj = {};
//   for (let i = 0; i < n; i++) {
//     obj[i + 1] = 0;
//   }
//   return obj;
// }

// function compareObj(obj) {
//   let tempObj = { ...obj };
//   tempObj.sort((a, b) => {
//     if (a[1] === b[1]) {
//       return a[0] - b[0];
//     } else {
//       return b[1] - a[1];
//     }
//   });
// }

// function solution(n, student, point) {
//   var answer = 0;
//   let studentObj = createObj(n);
//   for (let i = 0; i < student.length; i++) {
//     studentObj[student[i]] += point[i];
//   }
//   return answer;
// }

function sortArr(arr) {
  let tempArr = [...arr];
  tempArr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });
  return tempArr;
}

function getClass(arr, a, b) {
  let temp = [];
  for (let i = a; i < b; i++) {
    temp.push(arr[i][0]);
  }
  return temp.sort();
}

function solution(n, student, point) {
  var answer = 0;
  let classArr = Array.from(Array(n), () => new Array(2));
  classArr.forEach((el, i) => {
    el[0] = i + 1;
    el[1] = 0;
  });
  for (let i = 0; i < student.length; i++) {
    let idx;
    for (let j = 0; j < n; j++) {
      if (classArr[j][0] === student[i]) idx = j;
    }
    classArr[idx][1] += point[i];
    let sortedArr = sortArr(classArr);
    if (
      JSON.stringify(getClass(sortedArr, 0, n / 2)) !==
      JSON.stringify(getClass(classArr, 0, n / 2))
    ) {
      answer += 1;
    }
    classArr = [...sortedArr];
  }
  return answer;
}
// console.log(
//   solution(
//     6,
//     [6, 1, 4, 2, 5, 1, 3, 3, 1, 6, 5],
//     [3, 2, 5, 3, 4, 2, 4, 2, 3, 2, 2]
//   )
// );
console.log(
  solution(10, [3, 2, 10, 2, 8, 3, 9, 6, 1, 2], [3, 2, 2, 5, 4, 1, 2, 1, 3, 3])
);
