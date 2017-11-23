const btns = document.querySelectorAll('.flexBtn');

let userInputDiv = document.querySelector('#userInput');

function btnPressed(event){
  event.preventDefault();
  let id = this.dataset.btnType;
  userInputDiv.className = id;
}

btns.forEach(btn => {
  btn.addEventListener('click', btnPressed);
});