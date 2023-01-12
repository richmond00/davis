function solution(nums, m) {
  /**
   * put lt, sum, max
   * loop rt til rt is before nums.length
   * get the first sum
   * loop
   * subtract lt value
   * add rt value
   * check if it is max
   * 0 3
   * 1 4
   * 2 5
   */

  var lt = 0;
  var sum = 0;
  var max = -1;

  for (let i = 0; i < m; i++) {
    sum += nums[i];
  }

  max = sum;

  for (let rt = m; rt < nums.length; rt++) {
    sum -= nums[rt - m];
    sum += nums[rt];

    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

var output = solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3);
console.log(output);
