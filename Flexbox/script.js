const btns = document.querySelectorAll('.flexBtn');

let userInputDiv = document.querySelector('#userInput');

function checkSimilar(classList, classToBeAdded){

  let startOfClass = classToBeAdded.split('-');
  for(let i = 0; i < classList.length; i++){
    if(classList[i].split('-')[0] === startOfClass[0]){
      classList.remove(classList[i]);
    }
  }
  return classList;
}

function btnPressed(event){
  event.preventDefault();
  const id = this.dataset.btnType;
  let classList = userInputDiv.classList;
  classList = checkSimilar(classList, id);
  if(!classList.contains(id)){
    classList.add(id);
  }


  //const classes = userInputDiv.className.split(' ');
  // let classAlreadyInUse = false;
  // for(const key in classes){

  //   if(checkIfSimilar(classes, key, id)){
  //     classAlreadyInUse = true;
  //     break;
  //   }

  // 	if(classes[key] === id){
  // 		classAlreadyInUse = true;
  // 		break;
  // 	}
  // }

  // if(!classAlreadyInUse)
  // {
  // 	userInputDiv.className += " " + id;
  // }
}

btns.forEach(btn => {
  btn.addEventListener('click', btnPressed);
});

function reset(){
	userInputDiv.className = "";
}