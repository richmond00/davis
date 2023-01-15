/*
put stack, and result
make string array
loop the array
if open parenthesis, put it on stack
if closing parenthesis, put one out of stack

check stack's length
if it is longer than 0, wrong

*/
function solution(str) {
  var result = true;
  var stack = [];
  var arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    var el = arr[i];
    if (el === "(") {
      stack.push(el);
    } else if (el === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  if (stack.length > 0) {
    result = false;
  }
  return result;
}

var output = solution("(()(()))(()");

console.log(output);
