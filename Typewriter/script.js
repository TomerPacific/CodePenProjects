let inputElement = document.getElementById("userInput");

inputElement.focus();


document.onkeypress = function (e) {
    e = e || window.event;
  
   //enter pressed
   if (e.keycode === 13) {
     inputElement.style.height += '100px';
   }
    var audio = new Audio("typewriter-key-1.mp3");
    audio.play();
};