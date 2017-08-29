var gameBoard = new Array(3);
gameBoard[0] = [0,0,0];
gameBoard[1] = [0,0,0];
gameBoard[2] = [0,0,0];

var svgNS = "http://www.w3.org/2000/svg";
var whoIsPlaying = "Player";
var mark = "X";
var winner = 0;
var playerWins = 0;
var computerWins = 0;

window.onload = function()
{
	updateScore();
}

function updateScore()
{
	document.getElementById("playerScore").innerHTML = playerWins;
	document.getElementById("computerScore").innerHTML = computerWins;
}

function restartGame()
{
	gameBoard[0] = [0,0,0];
	gameBoard[1] = [0,0,0];
	gameBoard[2] = [0,0,0];
	winner = 0;
	document.getElementById("mySVG").removeChild("myLine");
}

function handleMove(element, position)
{
	var firstIndex = parseInt(position[0]);
	var secondIndex = parseInt(position[1]);
	var parent = element.parentElement;
	var x = parseInt(parent.getAttribute("x"));
	var y = parseInt(parent.getAttribute("y"));
	if(gameBoard[firstIndex][secondIndex] >= 0)
	{
		createMark(x, y);

		if(whoIsPlaying === "Player")
		{
			gameBoard[firstIndex][secondIndex] = -1;
		}
		else
		{
			gameBoard[firstIndex][secondIndex] = -2;
		}
		checkIfWon();
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
			updateScore();
			restartGame();
		}
		else
		{
			turnOver(whoIsPlaying);
		}
		
	}
}

function createMark(first, second)
{
	if(mark === "X")
	{
		var myLine = document.createElementNS(svgNS,"line"); 
		myLine.setAttributeNS(null,"id","myLine");
	    myLine.setAttributeNS(null,"x1",first);
	    myLine.setAttributeNS(null,"y1",second);
	    myLine.setAttributeNS(null,"x2",first + 200);
	    myLine.setAttributeNS(null,"y2",second + 200);
	    myLine.setAttributeNS(null,"stroke","white");
	    myLine.setAttributeNS(null,"stroke-width",2);

	    document.getElementById("mySVG").appendChild(myLine);

	    myLine = document.createElementNS(svgNS,"line"); 
	    myLine.setAttributeNS(null,"id","myLine");
	    myLine.setAttributeNS(null,"x1",first+200);
	    myLine.setAttributeNS(null,"y1",second);
	    myLine.setAttributeNS(null,"x2",first);
	    myLine.setAttributeNS(null,"y2",second+200);
	    myLine.setAttributeNS(null,"stroke","white");
	    myLine.setAttributeNS(null,"stroke-width",2);
		document.getElementById("mySVG").appendChild(myLine);
	}
	else
	{
		var myCircle = document.createElementNS(svgNS,"circle"); 
	    myCircle.setAttributeNS(null,"cx", first+100);
	    myCircle.setAttributeNS(null,"cy", second+100);
	    myCircle.setAttributeNS(null,"r",95);
	    myCircle.setAttributeNS(null,"fill","none");
	    myCircle.setAttributeNS(null,"stroke","white");

	    document.getElementById("mySVG").appendChild(myCircle);
	}
    
}

function turnOver(currentPlayer)
{
	if(currentPlayer === "Player")
	{
		whoIsPlaying = "Computer";
		mark = "O";
	}

	else
	{
		whoIsPlaying = "Player";
		mark = "X";
	}
}

function checkIfWon()
{
	var found = false;
	for(var i = 0; i < gameBoard.length && !found; i++)
	{
		//check if there are 3 identical symbols across a row
		if((gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2] && gameBoard[i][0] != 0) ||
			gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i] && gameBoard[0][i] != 0)
		{
			winner = gameBoard[i][0];
			found = true;
		}
	}

	if(!found)
	{
		if((gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2] && gameBoard[0][0] != 0) ||
		   gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0] && gameBoard[0][2] != 0)
		{
			winner = gameBoard[0][0];
		}
	}

}

function printBoard()
{
	for(var i = 0; i < gameBoard.length; i++)
	{
		console.log("gameboard["+i+"][0]" + gameBoard[i][0]);
		console.log("gameboard["+i+"][1]" + gameBoard[i][1]);
		console.log("gameboard["+i+"][2]" + gameBoard[i][2]);
	}
}