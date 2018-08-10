var nameField = document.querySelector('#name');

var emailField = document.querySelector('#email');

var ageField = document.querySelector('#number');

var form = document.querySelector('#survey-form');


validateRadio = function() {
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

validate = function(e) {
 
 e.preventDefault();

  var valid = true;

  if (nameField.value === '' ||
      emailField.value === '' ||
      ageField.value === '') {
    valid = false;
  }

  if (!validateRadio()) {
  	valid = false;
  }

  if (!validEmail(emailField.value)) {
  	valid = false;
  }

  if (!validAge(ageField.value)) {
  	valid = false;
  }

  return valid;
}


if (form.attachEvent) {
	form.attachEvent('submit', validate);
} else {
	form.addEventListener('submit', validate);
}