/*
put counter, stack
search moves
  pick one using current moves value - 1
    search until board[i][move - 1 ] is not zero
      when board[i][move-1] is not zero, push the value to stack
      update the [i][move-1] to 0
      if current stack value and previous stack value are the same, pop two times
        increase counter 2
 */

function solution(board, moves) {
  var counter = 0;
  var stack = [];

  moves.forEach((move) => {
    var i = 0;
    var j = move - 1;

    while (i < 5 && board[i][j] === 0) {
      i++;
    }

    if (i < 5) {
      stack.push(board[i][j]);
      board[i][j] = 0;
    }

    console.log(stack);

    if (stack.length > 2) {
      var firstLast = stack[stack.length - 1];
      var secondLast = stack[stack.length - 2];
      if (firstLast === secondLast) {
        stack.pop();
        stack.pop();
        counter++;
        counter++;
      }
    }
  });

  return counter;
}

var board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
var moves = [1, 5, 3, 5, 1, 2, 1, 4];
var output = solution(board, moves);

console.log(output);
