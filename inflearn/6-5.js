function solution(str) {
  var stack = [];
  var counter = 0;

  var arr = str.split("");
  arr.forEach((char, i) => {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (arr[i - 1] === "(") {
        stack.pop();
        counter += stack.length;
      } else if (arr[i - 1] === ")") {
        stack.pop();
        counter += 1;
      }
    }
  });

  return counter;
}

var input1 = "()(((()())(())()))(())";
var input2 = "(((()(()()))(())()))(()())";

var output = solution(input2);

console.log(output);
