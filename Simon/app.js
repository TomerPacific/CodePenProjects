var isInStrictMode = false;
var machineOn = false;
var gameStarted = false;
var strictModeBtn;
var startGameBtn;
var numOfMoves;
var moves = 1;

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
			for(var i = 0; i < moves; i++){
				startPlaying(i);
			}
	  	}
	});
}

function startPlaying(index){

		var whatToPlay = document.getElementById(btnsPlayRoutine[index].toString());
		switch(whatToPlay.id){
		case 'red':
			simonSoundRed.play();
			whatToPlay.style.background = 'rgba(255,0,0,1)';
			setTimeout(function(){
				whatToPlay.style.background = 'rgba(255,0,0,0.6)';
			},500);
			
			break;
		case 'blue':
			simonSoundBlue.play();
			whatToPlay.style.background = 'rgba(255,0,0,1)';
			setTimeout(function(){
				whatToPlay.style.background = 'rgba(255,0,0,0.6)';
			},500);
			break;
		case 'green':
			simonSoundGreen.play();
			whatToPlay.style.background = 'rgba(255,0,0,1)';
			setTimeout(function(){
				whatToPlay.style.background = 'rgba(255,0,0,0.6)';
			},500);
			break;
		case 'yellow':
			simonSoundYellow.play();
			whatToPlay.style.background = 'rgba(255,0,0,1)';
			setTimeout(function(){
				whatToPlay.style.background = 'rgba(255,0,0,0.6)';
			},500);
			break;
		default:
			console.log("Error in button id");
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

}