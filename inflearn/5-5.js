function solution(str1, str2) {
  var answer = "YES";
  var strArr1 = str1.split("");
  var strArr2 = str2.split("");
  var map1 = new Map();
  var map2 = new Map();

  strArr1.forEach((char) => {
    if (map1.has(char)) {
      map1.set(char, map1.get(char) + 1);
    } else {
      map1.set(char, 1);
    }
  });

  strArr2.forEach((char) => {
    if (map2.has(char)) {
      map2.set(char, map2.get(char) + 1);
    } else {
      map2.set(char, 1);
    }
  });

  map1.forEach((_, key) => {
    if (!map2.has(key)) {
      answer = "NO";
    } else if (map1.get(key) !== map2.get(key)) {
      answer = "NO";
    }
  });

  return answer;
}

var output = solution("AbaAeCe", "baeeACA");
// var output = solution("abaCC", "Caaab");
console.log(output);
