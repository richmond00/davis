function solution(nums, m) {
  var result = 0;
  var lt = 0;
  var sum = 0;

  for (let rt = 0; rt < nums.length; rt++) {
    sum += nums[rt];

    while (sum > m) {
      sum -= nums[lt];
      lt++;
    }
    result += rt - lt + 1;
  }

  return result;
}

function solution2(nums, m) {
  var rt = 0;
  var sum = 0;
  var counter = 0;

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
var nums = [1, 3, 1, 2, 3];
var output = solution2(nums, 5);
console.log(output);
