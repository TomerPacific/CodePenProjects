var isInStrictMode = false;
var machineOn = false;
var gameStarted = false;
var strictModeBtn;
var startGameBtn;
var numOfMoves;

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
	  	}
	});
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
  	}
    machineOn = !machineOn;
    
  });
});