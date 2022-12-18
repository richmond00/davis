
function solution(input) {
    var formattedInput = input.toLowerCase().replace(/[^a-z]/g, '');
    var strArr = formattedInput.split('');
    var length = strArr.length;

    for (let i = 0; i < length; i++) {
        var leftChar = strArr[i];
        var rightChar = strArr[length - 1 - i];
        if (leftChar !== rightChar) return "No";
    }

    return "Yes";
}
var input = "found7, time: study; Yduts; emit, 7Dnuof";
var output = solution(input);
console.log(output);