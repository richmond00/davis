function solution(input, e) {
    var inputArr = input.split("");
    var d = 1000;
    var dArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === e) {
            d = 0;
            dArr.push(d);
        } else {
            d++;
            dArr.push(d);
        }
    }
    d = 1000;
    for (let i = inputArr.length - 1; i >= 0; i--) {
        if (inputArr[i] === e) {
            d = 0;
        } else {
            d++;
            var minD = Math.min(d, dArr[i]);
            dArr[i] = minD;
        }
    }

    return dArr.join('');
}

var input = "teachermode";
var output = solution(input, "e");
console.log(output);