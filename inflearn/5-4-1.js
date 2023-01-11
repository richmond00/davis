function solution(nums, m) {
  var sum = 0;
  var counter = 0;
  var rt = 0;

  for (let lt = 0; lt < nums.length; lt++) {
    rt = lt;
    sum += nums[lt];

    while (sum <= m) {
      counter++;
      sum += nums[rt];
      rt++;
    }

    sum = 0;
  }

  return counter;
}

var output = solution([1, 3, 1, 2, 3], 5);
console.log(output);
