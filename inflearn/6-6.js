/**
1. search input until input length becomes 1 (input.length > 1)
2. check i + 1 % 3
3. if 2 is not 0
  3.1 take the first value out
  3.2 push it to input
4. if 2 is 0
  3.1 take the first value out
5. return the first value of the input
 */

function solution(input) {
  var i = 0;

  while (input.length > 1) {
    var is3rd = (i + 1) % 3 === 0;

    if (is3rd) {
      input.shift();
    } else if (!is3rd) {
      var shifted = input.shift();
      input.push(shifted);
    }
    i++;

    if (i === input.length - 1) {
      i = 0;
    }
  }

  return input[0];
}

var input = [1, 2, 3, 4, 5, 6, 7, 8];

var output = solution(input);

console.log(output);
