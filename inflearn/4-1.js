function solution(input) {
  var max = -1;
  var numsWithMax = [];
  var biggestNum = 0;

  for (let i = 0; i < input.length; i++) {
    var currentNum = input[i];
    var strArr = String(currentNum).split("");
    var sum = 0;

    for (let j = 0; j < strArr.length; j++) {
      sum += Number(strArr[j]);
    }

    if (sum >= max) {
      max = sum;
      numsWithMax.push(currentNum);
    }
  }

  for (let i = 0; i < numsWithMax.length; i++) {
    if (numsWithMax[i] > biggestNum) {
      biggestNum = numsWithMax[i];
    }
  }

  return biggestNum;
}

var input = [128, 460, 603, 40, 521, 137, 123];
var output = solution(input);
console.log(output);
