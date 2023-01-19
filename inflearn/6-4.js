/*
declare stack, result
make str arr
loop arr 
check the char or el
if char is number [0-8],
  push it to the stack
if char is *+-/,
  take the number out from stack two times,
  first gets right, second gets left
  ,and calculate it,
  the result is pushed to stack
loop ends

return the number in the current stack
*/

function solution(str) {
  var stack = [];
  var arr = str.split("");

  arr.forEach((char) => {
    if (char.search(/[0-9]/) === 0) {
      stack.push(parseInt(char));
    } else if (char.search(/[*+-/]/) === 0) {
      var r = stack.pop();
      var l = stack.pop();
      if (char === "+") {
        stack.push(l + r);
      } else if (char === "-") {
        stack.push(l - r);
      } else if (char === "*") {
        stack.push(l * r);
      } else if (char === "/") {
        stack.push(l / r);
      }
    }
  });
  return stack.pop();
}

var output = solution("352+*9-");

console.log(output);
