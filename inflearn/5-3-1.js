function solution(nums, m) {
  var lt = 0;
  var sum = nums[lt];
  var counter = 0;

  for (let rt = 1; rt < nums.length; rt++) {
    sum += nums[rt];

    if (sum === m) {
      counter++;
    }

    while (sum >= m) {
      sum -= nums[lt];
      lt++;

      if (sum === m) {
        counter++;
      }
    }
  }

  return counter;
}

var output = solution([1, 2, 1, 3, 1, 1, 1, 2], 6);
console.log(output);
