var visibleOnScreen = "";
var operationString = "";
var sawOperation = false;
var periodPressed = false;
var firstTime = true;
var screen;

window.onload = function() {
     screen = document.getElementById("calcScreen");
	screen.innerHTML = "0";
};



function onPress(element)
{
	switch(element)
	{
		case "+":
		case "*":
		case "/":
		case "-":
		{
			operationString += visibleOnScreen;
			operationString += element;
			visibleOnScreen = "";
			screen.innerHTML = element;
			sawOperation = true;
			periodPressed = false;
			break;
		}
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
		case ".":
		{
			if(visibleOnScreen.length > 14)
			{
				return;
			}

			if(!sawOperation && !firstTime)
			{
				if(element === "." && !periodPressed)
				{
					periodPressed = true;
				}
				else if(periodPressed && element === ".")
				{
					break;
				}
				visibleOnScreen += element;
				screen.innerHTML += element;
			}
			else if(firstTime || sawOperation)
			{
				firstTime = false;
				sawOperation = false;
				screen.innerHTML = element;
				visibleOnScreen += element;
			}
			break;
		}

		default:
		{
			break;
		}

	}
	

}
 

function calc()
{
	operationString += visibleOnScreen;
	screen.innerHTML = eval(operationString);
	periodPressed = false;
	visibleOnScreen = eval(operationString).toString();
}

function clearScreen()
{
	screen.innerHTML = "0";
	firstTime = true;
	visibleOnScreen = "";
	operationString = "";
	periodPressed = false;
}