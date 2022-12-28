function solution(threshold, input) {
  var answer = 0;
  input.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < input.length; i++) {
    var max = threshold;
    var current = input[i];
    var currentTotal = current[0] * 0.5 + current[1];
    max -= currentTotal;
    var counter = 1;

    for (let j = 0; j < input.length; j++) {
      if (j === i) {
        continue;
      }
      var inner = input[j];
      var innerTotal = inner[0] + inner[1];

      if (max - innerTotal >= 0) {
        max -= innerTotal;
        counter++;
      }
    }
    if (counter > answer) {
      answer = counter;
    }
  }

  return answer;
}

var input = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
var threshold = 28;
var output = solution(threshold, input);
console.log(output);
