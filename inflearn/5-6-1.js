/*
string is given
what character is the most frequently appeared?

*convert the string to object 
object key is character and value is frequency
{ B: 4, A: 2, ... }

1. put a map for the target object and max, answer
2. make str array
3. loop the array
4 check if the map has the current character
if it has, increase its value by 1
if it doesn't, assign the char to the map with value 1

5. loop the map
check if the current key's value is the max
if max, replace max with current value

6. return max
*/
function solution(str) {
  var map = new Map();
  var max = -1;
  var answer = "";

  var arr = str.split("");

  arr.forEach((char) => {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  });

  map.forEach((val, key) => {
    if (val > max) {
      answer = key;
      max = val;
    }
  });

  return answer;
}

var output = solution("BACBACCACCBDEDE");
console.log(output);
