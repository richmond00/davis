/*
two strings are given
two strings have the same characters with frequency
A:2 a:2 == a:2, A:2 

check if two strings are the same

0. put answer to yes
1. make the str1's map
2. make thr str2's map
3. compare two maps
if map1 key's value is different from map2's
answer is no

*/
function strToMap(str) {
  var map = new Map();
  var arr = str.split("");

  arr.forEach((char) => {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  });

  return map;
}
function solution(str1, str2) {
  var answer = "YES";
  var map1 = strToMap(str1);
  var map2 = strToMap(str2);

  map1.forEach((val, key) => {
    if (val !== map2.get(key)) {
      answer = "NO";
    }
  });

  return answer;
}

var output = solution("AbaAeCe", "baeeACA");
var output2 = solution("abaCC", "Caaab");
console.log(output);
console.log(output2);
