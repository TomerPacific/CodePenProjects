let menuType;
let amountOfMenuItems;



function showAmountOfMenuItems() {
	let menuItems = document.getElementById("amountOfItems");
	let typeOfMenu = document.getElementById("menus");
	menuItems.style.visibility = "visible";
	menuType =  typeOfMenu.value;
}

function showMenuItems() {
	let items = document.getElementById("items");
	items.style.visibility = 'visible';
	let amount = document.getElementById("menuItems").value;
	let itemsForm = document.getElementById("itemForm");
	for(let i = 0; i < amount; i++) {
		let idLabel = document.createElement('label');
		idLabel.innerHTML = 'Item ID:';
		let idInput = document.createElement("input");
		idInput.setAttribute('type', 'text');
		idInput.setAttribute('id', 'itemId');

		let iconLabel = document.createElement('label');
		iconLabel.innerHTML = 'Item Icon:';
		let iconInput = document.createElement("input");
		iconInput.setAttribute('type', 'text');
		iconInput.setAttribute('id', 'itemIcon');

		let titleLabel = document.createElement('label');
		titleLabel.innerHTML = 'Item Title:';
		let titleInput = document.createElement("input");
		titleInput.setAttribute('type', 'text');
		titleInput.setAttribute('id', 'itemTitle');

		itemForm.appendChild(idLabel);
		itemForm.appendChild(idInput);

		itemForm.appendChild(iconLabel);
		itemForm.appendChild(iconInput);

		itemForm.appendChild(titleLabel);
		itemForm.appendChild(titleInput);

		itemForm.appendChild(document.createElement('br'));

	}
}

/*

<label>Item ID:</label>
        <input type="text" id="itemId" />
        <label>Item Icon:</label>
        <input type="text" id="itemIcon" />
        <label>Item Title:</label>
        <input type="text" id="itemTitle" />
*/


function generateMenu() {
	var response = `<?xml version="1.0" encoding="utf-8"?>
					<menu xmlns:android="http://schemas.android.com/apk/res/android"
    					xmlns:app="http://schemas.android.com/apk/res-auto"
    					xmlns:actionProviderClass="http://schemas.android.com/tools">`;
    


}