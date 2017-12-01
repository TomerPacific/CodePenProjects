const btns = document.querySelectorAll('.flexBtn');

let userInputDiv = document.querySelector('#userInput');

function btnPressed(event){
  event.preventDefault();
  const id = this.dataset.btnType;
  const classes = userInputDiv.className.split(' ');
  let classAlreadyInUse = false;
  for(const key in classes){
  	if(classes[key] === id){
  		classAlreadyInUse = true;
  		break;
  	}
  }
  if(!classAlreadyInUse)
  {
  	userInputDiv.className += " " + id;
  }
}

btns.forEach(btn => {
  btn.addEventListener('click', btnPressed);
});

function reset(){
	userInputDiv.className = "";
}