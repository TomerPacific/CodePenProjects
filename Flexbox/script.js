const btns = document.querySelectorAll('.flexBtn');

let userInputDiv = document.querySelector('#userInput');
let btnClasses = [];
const columnClass = "col-md-6";


function btnPressed(event){
  event.preventDefault();
  const id = this.dataset.btnType;
  const dataClass = this.dataset.btnClass;
  let classList = userInputDiv.classList;
  let isJustifyProperty = dataClass.includes("space") || dataClass.includes("justify");
  let shouldAddColumnClass = dataClass.includes("wrap") ? true : false;
  if(btnClasses.includes(dataClass) || isJustifyProperty) {
    for(let i = 0; i < classList.length; i++) {
      if(classList[i].includes(dataClass) || 
        (isJustifyProperty && classList[i].includes("justify")) ||
        isJustifyProperty && classList[i].includes("space")) {
        classList.remove(classList[i]);
      }
    } // end for
    classList.add(id);
  } else {
      btnClasses.push(dataClass);
      classList.add(id);
  }
  if(shouldAddColumnClass && ![...classList].includes(columnClass)){
    classList.add(columnClass);
  }
  else {
     classList.remove(columnClass);
  }
  
}

btns.forEach(btn => {
  btn.addEventListener('click', btnPressed);
});

function reset(){
	userInputDiv.className = "";
  btnClasses = [];
}