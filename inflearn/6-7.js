/**
make answer and stack
make two strs two arrs
serach str2
check if str2's char is in str1
if so, check if the char matches with str1's first char
  if so, take out the first char from str1
  if not, return no
 */

function solution(str1, str2) {
  var queue = str1.split("");
  var strArr = str2.split("");

  for (let i = 0; i < strArr.length; i++) {
    var char = strArr[i];
    var firstChar = queue[0];

    if (queue.indexOf(char) !== -1) {
      if (char === firstChar) {
        queue.shift();
      } else if (char !== firstChar) {
        return "NO";
      }
    }
  }

  return "YES";
}

// var output = solution("CBA", "CBDAGE");
// var output = solution("CBA", "CGEADB");
var output = solution("CBA", "CBD");
console.log(output);
