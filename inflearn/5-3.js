function solution(nums, m) {
  var lt = 0;
  var rt = 1;
  var counter = 0;
  var sum = nums[lt] + nums[rt];

  while (rt < nums.length) {
    if (sum < m) {
      rt++;
      sum += nums[rt];
    } else if (sum > m) {
      lt++;
      sum -= nums[lt];
    } else if (sum === m) {
      counter++;
      lt++;
      sum -= nums[lt];
    }
  }

  return counter;
}

var nums = [1, 2, 1, 3, 1, 1, 1, 2];
var output = solution(nums, 6);
console.log(output);
