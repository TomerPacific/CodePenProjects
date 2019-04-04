let inputElement = document.getElementById("userInput");
let audio;
inputElement.focus();


document.onkeydown = function (e) {
    e = e || window.event;
  
   //enter pressed
   if (e.keyCode === 13) {
   	audio = new Audio("typewriter-paper-1.mp3");
    inputElement.style.height += '100px';
   } else {
   	 audio = new Audio("typewriter-key-1.mp3");
   }
   
   audio.play();
};