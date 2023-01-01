function solution(arr1, arr2) {
  var result = [];
  var p1 = 0;
  var p2 = 0;

  arr1.sort();
  arr2.sort();

  while (p1 < arr1.length && p2 < arr2.length) {
    var val1 = arr1[p1];
    var val2 = arr2[p2];

    if (val1 === val2) {
      result.push(val1);
      p1++;
      p2++;
    } else if (val1 < val2) {
      p1++;
    } else if (val1 > val2) {
      p2++;
    }
  }

  return result;
}

var arr1 = [1, 3, 9, 5, 2];
var arr2 = [3, 2, 5, 7, 8];
var output = solution(arr1, arr2);
console.log(output);
