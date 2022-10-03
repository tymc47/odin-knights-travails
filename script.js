const gameBoard = (() => {
  let board = [];
  const isValidMove = (location) => {
    let [x, y] = location;
    if (x < 0 || x > 7) return false;
    if (y < 0 || y > 7) return false;
    if (board[y][x] === 1) return false;
    return true;
  };

  const newBoard = () => {
    board.length = 0;
    for (let i = 0; i < 8; i++) {
      let row = [];
      for (let j = 0; j < 8; j++) {
        row.push(0);
      }
      board.push(row);
    }
  };

  const placeChess = (location) => {
    let [x, y] = location;
    board[y][x] = 1;
  };

  const isBoardFull = () => {
    return board.every((row) => row.every((grid) => grid === 1));
  };

  return {
    isValidMove,
    newBoard,
    placeChess,
  };
})();

class Knight {
  constructor(location = [0, 0], step = 0, pred = null) {
    this.location = location;
    this.step = step;
    this.pred = pred;
    this.pattern = [
      [-1, -2],
      [-1, +2],
      [+1, +2],
      [+1, -2],
      [-2, -1],
      [-2, +1],
      [+2, +1],
      [+2, -1],
    ];
  }

  nextPossibleStep(startingGrid = this.location) {
    const moves = this.pattern.map((move) => [
      move[0] + startingGrid[0],
      move[1] + startingGrid[1],
    ]);
    return moves.filter((move) => gameBoard.isValidMove(move));
  }
}

function knightMoves(start, target) {
  let queue = [];

  queue.push(new Knight(start, 0));

  let newKnight;
  gameBoard.newBoard();
  gameBoard.placeChess(start);

  while (queue.length !== 0) {
    newKnight = queue.shift();

    if (
      newKnight.location[0] === target[0] &&
      newKnight.location[1] === target[1]
    ) {
      console.log(`You made it in ${newKnight.step} moves! Here's your path: `);

      const solution = [];
      while (newKnight !== null) {
        solution.push(newKnight.location);
        newKnight = newKnight.pred;
      }

      while (solution.length !== 0) {
        console.log(`${solution.pop()} \n`);
      }

      return;
    }

    const nextMoves = newKnight.nextPossibleStep();
    for (let i = 0; i < nextMoves.length; i++) {
      gameBoard.placeChess(nextMoves[i]);
      queue.push(new Knight(nextMoves[i], newKnight.step + 1, newKnight));
    }
  }
  return false;
}
