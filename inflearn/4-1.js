function solution1(input) {
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

function solution2(input) {
  var max = -1;
  var numWithMax = -1;

  for (let i = 0; i < input.length; i++) {
    var currentNum = input[i];

    var sum = String(currentNum)
      .split("")
      .reduce((acc, curr) => (acc += Number(curr)), 0);

    if (sum > max) {
      max = sum;
      numWithMax = currentNum;
    } else if (sum === max) {
      if (numWithMax < currentNum) {
        numWithMax = currentNum;
      }
    }
  }

  return numWithMax;
}

function solution3(input) {
  var max = -1;
  var numWithMax = -1;

  for (let i = 0; i < input.length; i++) {
    var currentNum = input[i];
    var sum = 0;

    while (currentNum) {
      var remainder = currentNum % 10;
      sum += remainder;
      currentNum = Math.floor(currentNum / 10);
    }

    if (sum > max) {
      max = sum;
      numWithMax = input[i];
    } else if (sum === max) {
      if (numWithMax < input[i]) {
        numWithMax = input[i];
      }
    }
  }

  return numWithMax;
}

var input = [128, 460, 603, 40, 521, 137, 123];
var output = solution2(input);
console.log(output);
