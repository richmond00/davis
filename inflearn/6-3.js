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
function solution2(board, moves) {
  var counter = 0;
  var stack = [];

  for (let i = 0; i < moves.length; i++) {
    var move = moves[i];

    for (let j = 0; j < board.length; j++) {
      var currentBoard = board[j][move - 1];
      console.log(j, move - 1, currentBoard);
      if (currentBoard !== 0) {
        if (currentBoard === stack[stack.length - 1]) {
          stack.pop();
          counter += 2;
        } else {
          stack.push(currentBoard);
          board[j][move - 1] = 0;
        }
        break;
      }
    }
  }
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
var output = solution2(board, moves);

console.log(output);
