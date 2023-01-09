function solution2(arr1, arr2) {
  var arr = [];
  var p1 = 0;
  var p2 = 0;
  var arrLength1 = arr1.length;
  var arrLength2 = arr2.length;

  while (p1 < arrLength1 && p2 < arrLength2) {
    var num1 = arr1[p1];
    var num2 = arr2[p2];

    if (num1 < num2) {
      arr.push(num1);
      p1++;
    } else {
      arr.push(num2);
      p2++;
    }
  }

  if (p1 < arrLength1) {
    while (p1 < arrLength1) {
      arr.push(arr1[p1]);
      p1++;
    }
  }

  if (p2 < arrLength2) {
    while (p2 < arrLength2) {
      arr.push(arr2[p2]);
      p2++;
    }
  }

  return arr;
}

var output = solution2([1, 3, 5], [2, 3, 6, 7, 9]);
console.log(output);
