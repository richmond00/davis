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

var nums = [1, 3, 1, 2, 3];
var output = solution(nums, 5);
console.log(output);
