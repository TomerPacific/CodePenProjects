// List of JavaScript tips
var tipsList = [
	"Don't forget the <span class='code'>var</span> keyword when assigning a variable's value for the first time.",

	"<span class='code'>undefined</span>, <span class='code'>null</span>, <span class='code'>0</span>, <span class='code'>false</span>, <span class='code'>NaN</span>, and <span class='code'>''</span> (empty string) are all falsy.",

	"Declare a function with<br/> <span class='code-block'>function <em>myFunctionName</em>() { <br>&nbsp;&nbsp;...<br> }</span>",

	"<span class='code'>if</span>/<span class='code'>else</span> statements look like <br/> <span class='code-block'>if (<em>condition</em>) { <br/>&nbsp;&nbsp;...<br/>} else { <br/>&nbsp;&nbsp;...<br/>}",

	"You can return the result of a function into a variable with <span class='code'>return</span>:<br><span class='code-block'>function timesFive(inputNumber) {<br> &nbsp;&nbsp;return inputNumber * 5; <br>}<br>console.log(timesFive(6));<br>// Output: 30</span> ",

	"The <span class='code'>&&</span> operator means both things must be true: <br/> <span class='code-block'> true && true = true<br>true && false = false<br>false && false = false</span>",

	"The <span class='code'>||</span> operator means either can be true: <br/> <span class='code-block'> true || true = true<br>true || false = true<br>false || false = false</span>",

	"A <span class='code'>for</span> has three condtions: a start condition, a stop condition, and an iterator: <br> <span class='code-block'>for (var i = 0; i < myArray.length; i++) { <br>&nbsp;&nbsp;...<br>}</span>",

	"To interpolate a variable into a string, use the <span class='code'>+</span> operator, like this: <br> <span class='code-block'>var myName = 'Jon';<br/> 'Hello, my name is ' + myName;</span>",

	"To generate a random number, use JavaScript's built in function <span class='code'>Math.random()</span>.",

	"Arrays hold lists of data. You can access any of the list items by using bracket notation, like this: <br> <span class='code-block'>var myArray = ['pears', 'asparagus', 'bananas'];<br>myArray[1]; // asparagus</span>"
];

var tipLimitCounter = tipsList.length;
var tipCounter = document.getElementById("tipCount");
var jsTip = document.querySelector(".js-tip");
var tipBtn = document.querySelector(".tip-button");
tipCounter.innerHTML = tipLimitCounter.toString();


function generateRandomTip()
{
	var randomTipIndex = Math.floor(Math.random() * tipsList.length);
	console.log("Random tip index " + randomTipIndex);
	var tipToBeShown = tipsList[randomTipIndex];
	tipsList.splice(randomTipIndex, 1);
	console.log("Tip chosen " + tipToBeShown);
	console.log("Tips length " + tipsList.length);
	return tipToBeShown;
}

tipBtn.addEventListener("click", function()
{
	if(tipLimitCounter > 0)
	{
		var tipToBeShown = generateRandomTip();
		tipLimitCounter--;
		jsTip.innerHTML = tipToBeShown;
		tipCounter.innerHTML = tipLimitCounter.toString();
	}

	if(tipLimitCounter === 0)
	{
		tipBtn.classList.add("disabled");
		jsTip.innerHTML = "See you in an another tab!";
		tipCounter.innerHTML = "None";
	}
	

});
