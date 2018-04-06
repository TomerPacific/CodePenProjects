let renderDiv = document.querySelector("#render");

let rowBtn = document.getElementById("rowBtn");
let rowInput = document.getElementById("rows");
rowBtn.addEventListener("click", function(e) {
  let amountOfRows = rowInput.value;
  renderDiv.style.gridTemplateRows="repeat("+ amountOfRows + ", 100px)";
  for(let i = 0; i < amountOfRows; i++) {
  	let divElement = document.createElement('div');
  	divElement.classList.add("gridElement");
  	renderDiv.appendChild(divElement);
  }
});


let columnBtn = document.getElementById("columnBtn");
let columnInput = document.getElementById("columns");
columnBtn.addEventListener("click", function(e) {
  let amountOfColumns = columnInput.value;
  renderDiv.style.gridTemplateColumns="repeat("+ amountOfColumns + ", 100px)";
});