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
		idInput.setAttribute('class', 'itemId');

		let iconLabel = document.createElement('label');
		iconLabel.innerHTML = 'Item Icon:';
		let iconInput = document.createElement("input");
		iconInput.setAttribute('type', 'text');
		iconInput.setAttribute('class', 'itemIcon');

		let titleLabel = document.createElement('label');
		titleLabel.innerHTML = 'Item Title:';
		let titleInput = document.createElement("input");
		titleInput.setAttribute('type', 'text');
		titleInput.setAttribute('class', 'itemTitle');

		itemForm.appendChild(idLabel);
		itemForm.appendChild(idInput);

		itemForm.appendChild(iconLabel);
		itemForm.appendChild(iconInput);

		itemForm.appendChild(titleLabel);
		itemForm.appendChild(titleInput);

		itemForm.appendChild(document.createElement('br'));

	}
}


function generateMenu() {
	var prefix = `<?xml version="1.0" encoding="utf-8"?>
					<menu xmlns:android="http://schemas.android.com/apk/res/android"
    					xmlns:app="http://schemas.android.com/apk/res-auto"
    					xmlns:actionProviderClass="http://schemas.android.com/tools">
    					`;

   let xml = document.getElementById('xml');
   xml.innerHTML = prefix;
}

