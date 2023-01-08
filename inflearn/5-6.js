function compare(map1, map2) {
  var result = true;

  map2.forEach((val, key) => {
    if (!map1.has(key)) {
      result = false;
    } else if (map1.get(key) !== val) {
      result = false;
    }
  });

  return result;
}

function solution(str1, str2) {
  var lt = 0;
  var strMap1 = new Map();
  var strMap2 = new Map();
  var strArr1 = str1.split("");
  var strArr2 = str2.split("");
  var counter = 0;

  for (let i = 0; i < strArr2.length - 1; i++) {
    var char = strArr1[i];
    if (strMap1.has(char)) {
      strMap1.set(char, strMap1.get(char) + 1);
    } else {
      strMap1.set(char, 1);
    }
  }

  strArr2.forEach((char) => {
    if (strMap2.has(char)) {
      strMap2.set(char, strMap2.get(char) + 1);
    } else {
      strMap2.set(char, 1);
    }
  });

  for (let rt = strArr2.length - 1; rt < strArr1.length; rt++) {
    var char = strArr1[rt];

    if (strMap1.has(char)) {
      strMap1.set(char, strMap1.get(char) + 1);
    } else {
      strMap1.set(char, 1);
    }

    if (compare(strMap1, strMap2)) {
      console.log(strMap1);
      counter++;
    }

    var ltChar = strArr1[lt];
    lt++;

    strMap1.set(ltChar, strMap1.get(ltChar) - 1);
    if (strMap1.get(ltChar) === 0) {
      strMap1.delete(ltChar);
    }
  }

  return counter;
}

var output = solution("bacaAacba", "abc");
console.log(output);
