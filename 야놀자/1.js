const S = "NAABXXAN";

let bCount = S.split("B").length;
let aCount = S.split("A").length;
let nCount = S.split("N").length;

let total = 0;
//b:1 a:3 n:2
while (bCount > 0 && aCount > 0 && nCount > 0) {
  bCount -= 1;
  aCount -= 3;
  nCount -= 2;
  total += 1;
}

console.log(total - 1);
