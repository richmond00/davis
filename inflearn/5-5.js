function solution(input) {
  var answer = "";
  var max = -1;
  var obj = {};
  var strArr = input.split("");

  for (let i = 0; i < strArr.length; i++) {
    var char = strArr[i];

    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  Object.keys(obj).forEach((key) => {
    if (obj[key] > max) {
      max = obj[key];
      answer = key;
    }
  });

  return answer;
}

function solution2(input) {
  var answer = "";
  var map = new Map();
  var max = -1;
  var strArr = input.split("");

  strArr.forEach((char) => {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  });

  map.forEach((val, key) => {
    if (val > max) {
      max = val;
      answer = key;
    }
  });

  return answer;
}

var input = "BACBACCACCBDEDE";
var output = solution2(input);
console.log(output);
