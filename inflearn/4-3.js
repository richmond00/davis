function solution(input) {
  var students = 4;
  var counter = 0;
  var answer = [];

  for (let i = 1; i <= students; i++) {
    for (let j = 1; j <= students; j++) {
      if (i === j) {
        continue;
      }

      for (let k = 0; k < input.length; k++) {
        var testResult = input[k];
        var rankOfStudentI, rankOfstudentJ;

        for (let s = 0; s < testResult.length; s++) {
          if (testResult[s] === i) {
            rankOfStudentI = s;
          }
          if (testResult[s] === j) {
            rankOfstudentJ = s;
          }
        }

        if (rankOfStudentI < rankOfstudentJ) {
          counter++;
        }
      }
      if (counter === input.length) {
        answer.push([i, j]);
      }
      counter = 0;
    }
  }
  console.log(answer);

  return answer.length;
}

var input = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
var output = solution(input);
console.log(output);
