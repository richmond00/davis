/*
two strings are given; t , s
get the number of sub consecutive string that t and s are the same
bac = abc
aca != abc
aAa != abc
...
put lt, counter
get map for s with t.length (bac..)
get map for t
loop the s string; start from t.length
add current char to map
exclude lt's char
check if two maps are the same one another
if so, increase counter 1

( ( ) )
( ) )
*/
function makeMap(char, map) {
  if (map.has(char)) {
    map.set(char, map.get(char) + 1);
  } else {
    map.set(char, 1);
  }
}

function isSame(map1, map2) {
  var result = true;

  map1.forEach((val, key) => {
    if (!map2.get(key)) {
      result = false;
    }
    if (val !== map2.get(key)) {
      result = false;
    }
  });

  return result;
}

function solution(s, t) {
  var lt = 0;
  var counter = 0;

  var sMap = new Map();
  var tMap = new Map();

  var sArr = s.split("");
  var tArr = t.split("");

  for (let i = 0; i < tArr.length - 1; i++) {
    var char = sArr[i];
    makeMap(char, sMap);
  }
  for (let i = 0; i < tArr.length; i++) {
    var char = tArr[i];
    makeMap(char, tMap);
  }

  for (let rt = tArr.length - 1; rt < sArr.length; rt++) {
    var rChar = sArr[rt];
    makeMap(rChar, sMap);

    if (isSame(sMap, tMap)) {
      console.log(sMap);
      counter++;
    }

    var lChar = sArr[lt++];
    if (sMap.has(lChar)) {
      sMap.set(lChar, sMap.get(lChar) - 1);
      if (sMap.get(lChar) === 0) {
        sMap.delete(lChar);
      }
    }
  }

  return counter;
}

var output = solution("bacaAacba", "abc");
console.log(output);
