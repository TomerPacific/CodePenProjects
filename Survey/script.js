var nameField = document.querySelector('#name');

var emailField = document.querySelector('#email');

var ageField = document.querySelector('#number');

var form = document.querySelector('#survey-form');


isAnyRadioButtonChecked = function() {
	var radioButtons = document.getElementsByName('choice');
	var checked = false;

	for (let i = 0; i < radioButtons.length && !checked; i++) {
		if (radioButtons[i].checked) {
			checked = true;
		}
	}

	return checked;
}

validEmail = function(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

validAge = function(age) {
	var isValid =  /^\d+$/.test(age);
	return isValid;
}

areRequiredFieldsFilled = function() {
  if (nameField.value === '' ||
      emailField.value === '' ||
      ageField.value === '' }}
      !isAnyRadioButtonChecked()) {
    return false;
  }

  return true;
}

validate = function(e) {
  e.preventDefault();


  if (!areRequiredFieldsFilled()) {
    return false; 
  }

  if (!validEmail(emailField.value)) {
  	return false; 
  }

  if (!validAge(ageField.value)) {
  	return false; 
  }

  return true;
}


if (form.attachEvent) {
	form.attachEvent('submit', validate);
} else {
	form.addEventListener('submit', validate);
}