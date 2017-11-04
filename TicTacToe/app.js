var gameBoardForAI = ["0","1","2", "3", "4", "5", "6", "7", "8"];
var aiPlayer = "O";
var humanPlayer = "X";
var svgNS = "http://www.w3.org/2000/svg";
var whoIsPlaying = "Player";
var mark = "X";
var winner = 0;
var playerWins = 0;
var computerWins = 0;
var mySvg;
var amountOfMarks = 0;
const X_POSITION_PLACEMENT_FACTOR = 65;
const Y_POSITION_PLACEMENT_FACTOR = 130;
const SCORE_FOR_MINMAX = 10000;

window.onload = function()
{
	mySvg = document.getElementById("mySVG");
	updateScore();
}

function updateScore()
{
	document.getElementById("playerScore").innerHTML = playerWins;
	document.getElementById("computerScore").innerHTML = computerWins;
}

function restartGame()
{
	gameBoardForAI = ["0","1","2", "3", "4", "5", "6", "7", "8"];
	winner = 0;
	var childrenOfSvg = mySvg.childNodes;
	for(var i = childrenOfSvg.length - 1; i > childrenOfSvg.length - amountOfMarks; i--)
	{
		var elem = childrenOfSvg[i];
		if(elem.id === "paintedMark")
		{
			mySvg.removeChild(childrenOfSvg[i]);
		}
	}
	amountOfMarks = 0;
}

function handleMove(element, position, arrayIndex)
{
	var firstIndex = parseInt(position[0]);
	var secondIndex = parseInt(position[1]);
	var parent = element.parentElement;
	var x = parseInt(parent.getAttribute("x"));
	var y = parseInt(parent.getAttribute("y"));
	createMark(x, y);
	gameBoardForAI[arrayIndex] = mark;
	checkIfWon();
	turnOver();
	if(whoIsPlaying === "Computer")
	{
		handleComputerMove();
	}
	
}

function handleComputerMove()
{
		
	var move = miniMax(gameBoardForAI, mark);
	var moveTransposed = figureOutMark(move.index);
	gameBoardForAI[move.index] = mark;
	var elem = document.getElementById(move.index);
	parent = elem.parentElement;
	var x1 = parseInt(parent.getAttribute("x"));
	var y1 = parseInt(parent.getAttribute("y"));
	createMark(x1, y1);
	checkIfWon();
	turnOver();

}

//figureOutMark method used to find the corresponding place of the mark according to the index
function figureOutMark(index)
{
	var result;
	//casting type to integer
	switch(+index) 
	{
		case 0:
			result = "00";
			break;
		case 1:
			result = "01";
			break;
		case 2:
			result = "02";
			break;
		case 3:
			result = "10";
			break;
		case 4:
			result = "11";
			break;
		case 5:
			result = "12";
			break;
		case 6:
			result = "20";
			break;
		case 7:
			result = "21";
			break;
		case 8:
			result = "22";
			break;
		default:
	}
	return result;
}

function createMark(first, second)
{
	var newText = document.createElementNS(svgNS,"text");
	newText.setAttributeNS(null, "id", "paintedMark");
	newText.setAttributeNS(null,"x",first + X_POSITION_PLACEMENT_FACTOR);     
	newText.setAttributeNS(null,"y",second + Y_POSITION_PLACEMENT_FACTOR); 
	newText.setAttributeNS(null,"font-size","100");
	if(mark === "X")
	{
		newText.innerHTML = "X";
	}
	else
	{
		newText.innerHTML = "O";
	}
	mySvg.appendChild(newText);
    amountOfMarks++;
}

function turnOver()
{
	whoIsPlaying = whoIsPlaying === "Player" ? "Computer" : "Player";
	mark = whoIsPlaying === "Player" ? humanPlayer : aiPlayer;
}

function checkIfWon()
{
	var isThereAWin = winning(gameBoardForAI, mark);
	if(isThereAWin)
	{
		winner = whoIsPlaying;
	}
	if(winner !== 0 || amountOfMarks === 9)
	{
		gameOver();
	}
}

function gameOver()
{
	if(winner != 0)
	{
		alert("Game Over! " + whoIsPlaying + " WON!");
		if(whoIsPlaying === "Player")
		{
			playerWins++;
		}
		else
		{
			computerWins++;
		}
	}
	else
	{
		alert("Game Over! It's a DRAW");
	}

	updateScore();
	restartGame();
}

function freeSpotsInGameBoard(board)
{
	var results = [];
	for(var i  = 0; i < board.length; i++)
	{
		if(parseInt(board[i]) === i)
		{
			results.push(i);
		}
	}

	return results;
}

function miniMax(newBoard, player)
{
	var availableSpots = freeSpotsInGameBoard(newBoard);

	if(winning(newBoard, humanPlayer))
	{
		return {score : -10};
	}
	else if(winning(newBoard, aiPlayer))
	{
		return {score: +10};
	}
	else if(availableSpots.length === 0)
	{
		return {score : 0};
	}

	var moves = [];

	for(var i = 0; i < availableSpots.length; i++)
	{
		var move = {};
		move.index = newBoard[availableSpots[i]];
	
		newBoard[availableSpots[i]] = player;

		if(player === aiPlayer)
		{
			var result = miniMax(newBoard, humanPlayer);
			move.score = result.score;
		}
		else{
			var result = miniMax(newBoard, aiPlayer);
			move.score = result.score;
		}

		newBoard[availableSpots[i]] = move.index;
		moves.push(move);
	}

	var bestMove;
	if(player === aiPlayer)
	{
		var bestScore = SCORE_FOR_MINMAX * -1;
		for(var i = 0; i < moves.length; i++)
		{
			if(moves[i].score > bestScore)
			{
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}
	else
	{
		var bestScore = SCORE_FOR_MINMAX;
	    for(var i = 0; i < moves.length; i++){
	      if(moves[i].score < bestScore){
		        bestScore = moves[i].score;
		        bestMove = i;
	      	}
   		}
	}

	return moves[bestMove];
}

//Method to check if either the Computer or Player has won
function winning(board, player){

 if (
 (board[0] == player && board[1] == player && board[2] == player) ||
 (board[3] == player && board[4] == player && board[5] == player) ||
 (board[6] == player && board[7] == player && board[8] == player) ||
 (board[0] == player && board[3] == player && board[6] == player) ||
 (board[1] == player && board[4] == player && board[7] == player) ||
 (board[2] == player && board[5] == player && board[8] == player) ||
 (board[0] == player && board[4] == player && board[8] == player) ||
 (board[2] == player && board[4] == player && board[6] == player)
 ) {
 	return true;
 } else {
 	return false;
 }
}
