function solution(input, k) {
  var sumSet = new Set();
  var inputLength = input.length;

  for (let i = 0; i < inputLength; i++) {
    for (let j = i + 1; j < inputLength; j++) {
      for (let k = j + 1; k < inputLength; k++) {
        var sum = input[i] + input[j] + input[k];
        sumSet.add(sum);
      }
    }
  }

  var sorted = Array.from(sumSet).sort((a, b) => b - a);

  return sorted[k - 1];
}

var input = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
var k = 3;
var output = solution(input, k);
console.log(output);
