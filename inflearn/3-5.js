function solution(input) {
    var arr = input.split('');
    arr.push('');
    var frequency = 1;
    var outputArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        var currentEl = arr[i];
        var nextEl = arr[i + 1];

        if (currentEl === nextEl) {
            frequency++;
        } else {
            outputArr.push(currentEl);

            if (frequency > 1) {
                outputArr.push(frequency);
            }
            frequency = 1;
        }

    }

    var output = outputArr.join('');
    return output;


}

var input = "KKHSSSSSSSE";
var output = solution(input);
console.log(output);