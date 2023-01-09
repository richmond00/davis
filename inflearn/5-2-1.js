function solution(arr1, arr2) {
  var arr = [];
  var p1 = 0;
  var p2 = 0;

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  while (p1 < arr1.length && p2 < arr2.length) {
    var num1 = arr1[p1];
    var num2 = arr2[p2];

    if (num1 === num2) {
      arr.push(num1);
      p1++;
      p2++;
    } else if (num1 < num2) {
      p1++;
    } else if (num1 > num2) {
      p2++;
    }
  }

  return arr;
}

var output = solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]);
console.log(output);
