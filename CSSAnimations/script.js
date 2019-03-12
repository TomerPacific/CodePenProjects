let animate = document.getElementById("animationBlock");

function setInput(id) {
  let inputSource = document.getElementById(id);
  animate.style.animationDuration = inputSource.value + "s";
}