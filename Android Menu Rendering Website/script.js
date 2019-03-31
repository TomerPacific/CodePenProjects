const ITEM_ID = "itemId";
const ITEM_ICON = "itemIcon";
const ITEM_TITLE = "itemTitle";


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
		idInput.setAttribute('class', ITEM_ID);
		idInput.setAttribute('id', ITEM_ID + '_' + uniqueIdentifier);

		let iconLabel = document.createElement('label');
		iconLabel.innerHTML = 'Item Icon:';
		let iconInput = document.createElement("input");
		iconInput.setAttribute('type', 'file');
		iconInput.setAttribute('class', ITEM_ICON);
		iconInput.setAttribute('id', ITEM_ICON + '_' + uniqueIdentifier);

		let titleLabel = document.createElement('label');
		titleLabel.innerHTML = 'Item Title:';
		let titleInput = document.createElement("input");
		titleInput.setAttribute('type', 'text');
		titleInput.setAttribute('class', ITEM_TITLE);
		titleInput.setAttribute('id', ITEM_TITLE + '_' + uniqueIdentifier);

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
    			xmlns:actionProviderClass="http://schemas.android.com/tools">`;

   

   for (let i = 0; i < amountOfMenuItems; i++) {
	   	let menuItemId = document.getElementById(ITEM_ID + '_' + i);
		let menuItem = '';

	   	if (menuItemId.value) {
   			menuItem = '<item android:id="@+id/'  + menuItemId.value + "\"\n ";
	   	}
	   
	   	let menuItemIcon = document.getElementById(ITEM_ICON + '_' + i);

	   	if (menuItemIcon.value) {
   			menuItem += 'android:icon="' + menuItemIcon.value + "\"" + "\n ";
	   	}

	   	let menuItemTitle = document.getElementById(ITEM_TITLE + '_' + i);

	   	if (menuItemTitle.value) {
		   	menuItem += 'android:title="' + menuItemTitle.value + "\"" + "\n";
	   	}

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