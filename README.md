# Odin - Knight Travails

 A function knightMoves that shows the shortest possible way for Knight to get from one sqaure to another

## Examples
 ```
 knightMoves([3,3],[0,0])
 You made it in 2 moves! Here's your path:
[3,3]
[2,1]
[0,0]
 ```
 

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