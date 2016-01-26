console.log("main.js loaded!")

/* Model */

var won= false;
var currentPlayer = " x ";
var board = [
"", "", "", // 0 ,1 ,2
"", "", "", // 3, 4 ,5
"", "", "" // 6, 7 ,8
];

//1.START THE GAME
//2.MOVE(CHANGE TURN)
// Inputs:
// - whose turn it is,
// - what cell

// outcome:
// - fill in cell with right player
// - calculate if there is a winner
// - turn changes
var move = function(cellIndex){
  board[cellIndex] = currentPlayer;
  if (gameWon()) {
  won = true;
} else {
  if  (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }

}

};


//3.WIN THE GAME
var gameWon= function(){};
