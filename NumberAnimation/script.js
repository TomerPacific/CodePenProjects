var fromSlider = document.getElementById("from");
var fromOutput = document.getElementById("from-slider-output");
var toSlider = document.getElementById("to");
var toOutput = document.getElementById("to-slider-output");

var animateBtn = document.getElementById("animate");


fromOutput.innerHTML = fromSlider.value; 
toOutput.innerHTML = toSlider.value; 

fromSlider.oninput = function() {
  fromOutput.innerHTML = this.value;
}

toSlider.oninput = function() {
  toOutput.innerHTML = this.value;
}


function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var element = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        element.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
            animateBtn.innerHTML = "Try again?";
        }
    }, stepTime);
}


function startAnimation() {
  animateBtn.innerHTML = "Animate";
  animateValue("value", parseInt(fromOutput.innerHTML), parseInt(toOutput.innerHTML), 2500);
}

