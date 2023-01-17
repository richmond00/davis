/*
put stack and answer
make str arr
search the arr; loop
if char is ( ==> add it on stack
if char is stack.length > 0 && [A-Z] ==> add it on stack
if char is stack.length > 0 && ) ==> remove until meet (
if stack.length === 0 && [a-z] push it answer

return answer

*/

function solution(str) {
  var stack = [];
  var answer = [];

  var arr = str.split("");

  arr.forEach((char) => {
    if (char === "(") {
      stack.push(char);
    }

    if (stack.length > 0) {
      if (char.search(/[A-Z]/) === 0) {
        stack.push(char);
      } else if (char === ")") {
        while (stack.pop() !== "(") {}
      }
    } else if (stack.length === 0) {
      answer.push(char);
    }
  });

  return answer.join("");
}

var output = solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)");

console.log(output);
