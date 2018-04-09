let renderDiv = document.querySelector("#render");
let resetBtn = document.querySelector("#resetBtn");
let counter = 1;

let rowBtn = document.getElementById("rowBtn");
let rowInput = document.getElementById("rows");
rowBtn.addEventListener("click", function(e) {
  let amountOfRows = rowInput.value;
  renderDiv.style.gridTemplateRows="repeat("+ amountOfRows + ", 100px)";
  for(let i = 0; i < amountOfRows; i++) {
  	let divElement = document.createElement('div');
  	divElement.classList.add('gridElement');
  	divElement.innerHTML = counter;
  	counter++;
  	renderDiv.appendChild(divElement);
  }
});


let columnBtn = document.getElementById("columnBtn");
let columnInput = document.getElementById("columns");
columnBtn.addEventListener("click", function(e) {
  let amountOfColumns = columnInput.value;
  renderDiv.style.gridTemplateColumns="repeat("+ amountOfColumns + ", 100px)";
});


resetBtn.addEventListener("click", function(e) {
	renderDiv.innerHTML = "";
	renderDiv.className = "";
	renderDiv.removeAttribute('style');
	counter = 1;
	columnInput.value = "";
	rowInput.value = "";
});

