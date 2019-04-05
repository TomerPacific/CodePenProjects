let inputElement = document.getElementById("userInput");
let audio;

const BACKSPACE = 8;
const DELETE = 46;
const ENTER = 13;

inputElement.focus();


document.onkeydown = function (e) {
    e = e || window.event;
  
   //enter pressed
   if (e.keyCode === ENTER) {
   	audio = new Audio("typewriter-forward-1.mp3");
    inputElement.style.height += '100px';
   } else if (e.keyCode === BACKSPACE || event.keyCode == DELETE) {
	 return false;
   } else {
   	 audio = new Audio("typewriter-key-1.mp3");
   }
   
   audio.play();
};