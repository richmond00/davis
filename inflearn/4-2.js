function isPrime(num) {
  if (num === 1) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(num); i++) {
    const remainder = num % i;
    if (remainder === 0) {
      return false;
    }
  }

  return true;
}

function solution(input) {
  //convert numbers to the flipped 32 ==> 23, 120 => 012 => 12
  var flipped = input.map((num) => {
    var arr = String(num).split("");
    var newNum = "";
    while (arr.length) {
      var stack = arr.pop();
      newNum += stack;
    }

    return Number(newNum);
  });
  // if the first digit is zero, remove it
  console.log(flipped);
  // check if the flipped is prime number
  var primeNums = flipped.filter((num) => isPrime(num));

  // if so, then store the flipped on the array
  return primeNums;
}

var input = [32, 55, 62, 20, 250, 370, 200, 30, 100];
var output = solution(input);
console.log(output);
