let menuType = '';
let amountOfMenuItems = 0;
let uniqueIdentifier = 0;

let menuItems = document.getElementById("amountOfItems");
let typeOfMenu = document.getElementById("menus");
let xml = document.getElementById('xml');
let items = document.getElementById("items");
let itemsForm = document.getElementById("itemForm");

function showAmountOfMenuItems() {
	
	menuItems.style.visibility = "visible";
	menuType =  typeOfMenu.value;
}

function showMenuItems() {
	items.style.visibility = 'visible';
	amountOfMenuItems = document.getElementById("menuItems").value;
	for(let i = 0; i < amountOfMenuItems; i++) {
		let idLabel = document.createElement('label');
		idLabel.innerHTML = 'Item ID:';
		let idInput = document.createElement("input");
		idInput.setAttribute('type', 'text');
		idInput.setAttribute('class', 'itemId');
		idInput.setAttribute('id', 'itemId_' + uniqueIdentifier);

		let iconLabel = document.createElement('label');
		iconLabel.innerHTML = 'Item Icon:';
		let iconInput = document.createElement("input");
		iconInput.setAttribute('type', 'file');
		iconInput.setAttribute('class', 'itemIcon');
		iconInput.setAttribute('id', 'itemIcon_' + uniqueIdentifier);

		let titleLabel = document.createElement('label');
		titleLabel.innerHTML = 'Item Title:';
		let titleInput = document.createElement("input");
		titleInput.setAttribute('type', 'text');
		titleInput.setAttribute('class', 'itemTitle');
		titleInput.setAttribute('id', 'itemTitle_' + uniqueIdentifier);

		itemForm.appendChild(idLabel);
		itemForm.appendChild(idInput);

		itemForm.appendChild(iconLabel);
		itemForm.appendChild(iconInput);

		itemForm.appendChild(titleLabel);
		itemForm.appendChild(titleInput);

		itemForm.appendChild(document.createElement('br'));

		uniqueIdentifier++;

	}
}


function generateMenu() {
	if (menuType === '' || amountOfMenuItems === 0) {
		return;
	}
	var prefix = `<?xml version="1.0" encoding="utf-8"?>
					<menu xmlns:android="http://schemas.android.com/apk/res/android"
    					xmlns:app="http://schemas.android.com/apk/res-auto"
    					xmlns:actionProviderClass="http://schemas.android.com/tools">
    					`;

   

   for (let i = 0; i < amountOfMenuItems; i++) {
	   	let menuItemId = document.getElementById('itemId_' + i);
	   	let menuItem = '<item android:id="@+id/'  + menuItemId.value + "\"";
	   	let menuItemIcon = document.getElementById('itemIcon_' + i);
	   	menuItem += 'android:icon="' + menuItemIcon.value + "\"" + "\n";
	   	let menuItemTitle = document.getElementById('itemTitle_' + i);
	   	menuItem += 'android:title="' + menuItemTitle.value + "\"" + "\n";
	   	menuItem += '/>' + "\n";

	   	prefix += menuItem;
	   	menuItem = '';
   }

   xml.innerHTML = prefix + '</menu>';

}



function copyText() {

	xml.select();
  	document.execCommand("copy");
}