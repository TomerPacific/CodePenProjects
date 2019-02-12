let displayDiv = document.getElementById("display");

function displayButtonInfo(text, id) {
	displayDiv.innerHTML = text;
	playAudio(id)
}

function playAudio(elem) {
	let audioElement = document.getElementById(elem);
	audioElement.play();
}

document.onkeypress = function (e) {
    e = e || window.event;
    let buttonToPress = String.fromCharCode(e.keyCode).toUpperCase();
    let elem = document.getElementById(buttonToPress);
   	elem.play();
    
};
