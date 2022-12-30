function solution(arr1, arr2) {
  var combinedArr = [];
  var p1 = 0;
  var p2 = 0;
  var l1 = arr1.length;
  var l2 = arr2.length;

  while (p1 < l1 || p2 < l2) {
    var val1 = arr1[p1];
    var val2 = arr2[p2];

    if (val1 < val2) {
      combinedArr.push(val1);
      p1++;
    } else {
      combinedArr.push(val2);
      p2++;
    }
  }

  if (p1 < l1) {
    while (p1 < l1) {
      combinedArr.push(arr[p1]);
      p1++;
    }
  }

  if (p2 < l2) {
    while (p2 < l2) {
      combinedArr.push(arr[p2]);
      p2++;
    }
  }

  return combinedArr;
}

var arr1 = [1, 3, 5];
var arr2 = [2, 3, 6, 7, 9];
var output = solution(arr1, arr2);
console.log(output);
