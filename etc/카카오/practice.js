function mostDist(arr, n) {
  let result = 0;
  let idx = -1;
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
      result += i + 1;
      idx = i;
      break;
    }
  }
  return [result, idx];
}

function solution(cap, n, deliveries, pickups) {
  var answer = 0;
  while (true) {
    let max_dist = 0;
    const deliverInfo = mostDist(deliveries, n);
    const pickupInfo = mostDist(pickups, n);
    if (deliverInfo[1] === -1 && pickupInfo[1] === -1) {
      break;
    }
    if (deliverInfo[0] > pickupInfo[0]) {
      max_dist = deliverInfo[1];
      answer += 2 * deliverInfo[0];
    } else {
      max_dist = pickupInfo[1];
      answer += 2 * pickupInfo[0];
    }
    let max_cap = cap;

    for (let i = max_dist; i >= 0; i--) {
      if (deliveries[i] !== 0) {
        let diff = max_cap - deliveries[i];
        if (diff <= 0) {
          deliveries[i] -= max_cap;
          max_cap = 0;
          break;
        } else {
          max_cap -= deliveries[i];
          deliveries[i] = 0;
        }
      }
      max_cap = cap;

      if (pickups[i] !== 0) {
        let diff = max_cap - pickups[i];
        if (diff <= 0) {
          pickups[i] -= max_cap;
          max_cap = 0;
          break;
        } else {
          max_cap -= pickups[i];
          pickups[i] = 0;
        }
      }
    }
  }
  console.log(answer);
  return answer;
}

solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]);
