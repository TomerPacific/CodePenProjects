let animate = document.getElementById("animationBlock");

function setInput(id) {
  let inputSource = document.getElementById(id);
   if (id === "duration") {
    animate.style.animationDuration = inputSource.value + "s";
  } else if (id === "count") {
    animate.style.animationIterationCount = inputSource.value;
  } else if (id === "delay") {
     animate.style.animationDelay = inputSource.value + "s";
  }
}