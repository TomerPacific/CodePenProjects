let renderDiv = document.querySelector("#render");
let resetBtn = document.querySelector("#resetBtn");
let counter = 1;

//Grid rows
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

//Grid columns
let columnBtn = document.getElementById("columnBtn");
let columnInput = document.getElementById("columns");
columnBtn.addEventListener("click", function(e) {
  let amountOfColumns = columnInput.value;
  renderDiv.style.gridTemplateColumns="repeat("+ amountOfColumns + ", 100px)";
});

//Grid gap
let gapBtn = document.getElementById("gapBtn");
let gapInput = document.getElementById("gap");
gapBtn.addEventListener("click", function(e) {
  let gapAmount = gapInput.value;
  renderDiv.style.gridGap = gapAmount+"%";
});


//Reset
resetBtn.addEventListener("click", function(e) {
	renderDiv.innerHTML = "";
	renderDiv.className = "";
	renderDiv.removeAttribute('style');
	counter = 1;
	columnInput.value = "";
	rowInput.value = "";
});

