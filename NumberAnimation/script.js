var fromSlider = document.getElementById("from");
var fromOutput = document.getElementById("from-slider-output");
var toSlider = document.getElementById("to");
var toOutput = document.getElementById("to-slider-output");

var animateBtn = document.getElementById("animate");
var element = document.getElementById("value");
element.innerHTML = fromSlider.value;

function setup() {
  fromOutput.innerHTML = fromSlider.value; 
  toOutput.innerHTML = toSlider.value; 

  fromSlider.oninput = function() {
    fromOutput.innerHTML = this.value;
    element.innerHTML = this.value;

  }

  toSlider.oninput = function() {
    toOutput.innerHTML = this.value;
  }
}

function animateValue(start, end, duration) {
  
    var range = end - start;

    if (range === 0) {
      return;
    }

    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
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
  animateValue(parseInt(fromOutput.innerHTML), parseInt(toOutput.innerHTML), 2500);
}

setup();