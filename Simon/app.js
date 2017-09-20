var isInStrictMode = false;
var machineOn = false;
var gameStarted = false;
var strictModeBtn;
var startGameBtn;
var numOfMoves;
var moves = 1;
var currentKeyToPress = 0;

var btnsPlayRoutine = ['red', 'blue', 'green', 'yellow', 'green', 'blue', 'blue', 'red', 'red'];

var simonSoundRed = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var simonSoundBlue = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var simonSoundGreen = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var simonSoundYellow = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');



window.onload = function()
{
	strictModeBtn = document.getElementById("strict");
	startGameBtn = document.getElementById("start");
	numOfMoves = document.getElementById("numOfMoves");
	strictModeBtn.addEventListener("click", function()
	{
		if(machineOn)
	 	{
	    	isInStrictMode = !isInStrictMode;
	  	}
	});

	startGameBtn.addEventListener("click", function()
	{
	 	if(machineOn && !gameStarted)
	  	{
	  		gameStarted = true;
	  		numOfMoves.innerHTML = moves.toString();
			handleGame();
	  	}
	});
}

function handleGame(){

	startPlaying(0);

}

function resetGame(){
	moves = 1;
	numOfMoves.innerHTML = moves.toString();
	handleGame();
}

function startPlaying(index){

		if(index >= moves){
			return;
		}

		var whatToPlay = document.getElementById(btnsPlayRoutine[index]);
		switch(whatToPlay.id){
		case 'red':
			simonSoundRed.play();
			whatToPlay.style.background = 'rgba(255,0,0,1)';
			setTimeout(function(){
				whatToPlay.style.background = 'rgba(255,0,0,0.6)';
				startPlaying(++index);
			},750);
			
			break;
		case 'blue':
			simonSoundBlue.play();
			whatToPlay.style.background = 'rgba(0,0,255,1)';
			setTimeout(function(){
				whatToPlay.style.background = 'rgba(0,0,255,0.6)';
				startPlaying(++index);
			},500);
			break;
		case 'green':
			simonSoundGreen.play();
			whatToPlay.style.background = 'rgba(0,255,0,1)';
			setTimeout(function(){
				whatToPlay.style.background = 'rgba(0,255,0,0.6)';
				startPlaying(++index);
			},500);
			break;
		case 'yellow':
			simonSoundYellow.play();
			whatToPlay.style.opacity = 1;
			setTimeout(function(){
				whatToPlay.style.opacity = 0.6;
				startPlaying(++index);
			},500);
			break;
		default:
			console.log("Error in button id " + whatToPlay.id);
			break;
		}
	
}

$(document).ready(function() {
  $("#onBtn").click(function(event){
  	if(!machineOn)
  	{
  		$(this).animate({"left" : "+=25px"}, "slow");
  		numOfMoves.style.fill="white";
  	}
  	else
  	{
  		$(this).animate({"left" : "-=25px"}, "slow");
  		numOfMoves.style.fill="black";
  		gameStarted = false;
  		numOfMoves.innerHTML = "0";
  	}
    machineOn = !machineOn;
    
  });
});

function handleClick(btnId){
	if(!machineOn || !gameStarted){
		return;
	}
	if(machineOn && gameStarted){
	switch(btnId){
		case 'red':
			simonSoundRed.play();
			break;
		case 'blue':
			simonSoundBlue.play();
			break;
		case 'green':
			simonSoundGreen.play();
			break;
		case 'yellow':
			simonSoundYellow.play();
			break;
		default:
			console.log("Error in button id " + btnId);
			break;
		}	
	}

	//On correct key pressed
	if(btnsPlayRoutine[currentKeyToPress] === btnId){
		if(currentKeyToPress < moves){
			currentKeyToPress++;
		}
		if(currentKeyToPress === moves)
		{
			moves++;
			currentKeyToPress = 0;
			numOfMoves.innerHTML = moves.toString();
			setTimeout(function(){
				handleGame();
			},1000);

		}
		
	}
	//On wrong key pressed
	else{
		alert("Wrong!!!!");
		if(isInStrictMode){
			resetGame();
		}
		else
		{
			handleGame();
		}
	}
}