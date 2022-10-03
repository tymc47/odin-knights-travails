# Odin - Knight Travails

 A function knightMoves that shows the shortest possible way for Knight to get from one sqaure to another

## Examples
 - knightMoves([0,0],[1,2]) == [[0,0],[1,2]]
 - knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]

## Structure
####  `gameBoard` module 
    - `isValidMove` check whether a move is valid
    - `newBoard` mark all the sqaures as unvisited
    - `placeChess` mark the sqaure as visited

####  `Knight` class
    - Properties: location, step, pred
    - `nextPossibleStep` yield all possible next steps

#### `knightMoves` function
    - searching for the minimun step to reach to the target using BFS