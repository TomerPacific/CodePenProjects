let toggleSlideFlag = true;
let modal = document.getElementById("modal");
let closeButton = document.getElementById("close");

function toggleSlide() {
  let slideAmount;
  if (toggleSlideFlag) {
    modal.classList.remove("slideOut");
    modal.classList.add("slideIn");
    slideAmount = 0 + "px";
  } else {
    modal.classList.remove("slideIn");
    modal.classList.add("slideOut");
    slideAmount = -900 + "px";
  }
  modal.style.left = slideAmount;
  toggleSlideFlag = !toggleSlideFlag;
}

closeButton.onclick = function() {
  toggleSlide();
}