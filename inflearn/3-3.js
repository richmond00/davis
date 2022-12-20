
function solution(input) {
    var numbers = input.replace(/[^0-9]/g, '');
    return Number(numbers);
}

function solution2(input) {
    var splitted = input.split('');
    var nums = '';
    for (let i = 0; i < splitted.length; i++) {
        var isNumber = !isNaN(splitted[i]);
        if (isNumber) {
            nums += splitted[i];
        }
    }
    return parseInt(nums);
}

var input = "g0en2T0s8eSoft";
var output = solution(input);
console.log(output);