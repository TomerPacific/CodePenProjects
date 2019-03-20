let animate = document.getElementById("animationBlock");

function setInput(id) {
  let inputSource = document.getElementById(id);
   if (id === "duration") {
    animate.style.animationDuration = inputSource.value + "s";
  } else if (id === "count") {
    animate.style.animationIterationCount = inputSource.value;
  } else if (id === "delay") {
    var cloned = animate.cloneNode(true);
    cloned.style.setProperty('animation-delay', inputSource.value + "s");
    animate.parentNode.replaceChild(cloned, animate);
  }
}