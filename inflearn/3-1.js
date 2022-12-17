var input = "gooG";
var input = "go3oG"
/*
* g G
* o o
* 0 3
* 1 2
* */
function checkStr (input) {
    var strArr = input.toLowerCase().split("");
    var inputLength = strArr.length;
    for (let i = 0; i < Math.round(inputLength / 2); i++) {
        var reversedIndex = inputLength - 1 - i;
        var isSame = strArr[i]=== strArr[reversedIndex];

        if (!isSame) return "No";
    }

    return "Yes";
}

var output = checkStr(input);
console.log(output);