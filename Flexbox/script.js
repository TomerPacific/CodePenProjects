const btns = document.querySelectorAll('.flexBtn');

let userInputDiv = document.querySelector('#userInput');
let btnClasses = [];


function btnPressed(event){
  event.preventDefault();
  const id = this.dataset.btnType;
  const dataClass = this.dataset.btnClass;
  let classList = userInputDiv.classList;

  if(btnClasses.includes(dataClass)) {
    for(let i = 0; i < classList.length; i++) {
      if(classList[i].includes(dataClass)) {
        classList.remove(classList[i]);
      }
    }
    classList.add(id);
  }
  else{
      btnClasses.push(dataClass);
      classList.add(id);
  }
  
}

btns.forEach(btn => {
  btn.addEventListener('click', btnPressed);
});

function reset(){
	userInputDiv.className = "";
  btnClasses = [];
}