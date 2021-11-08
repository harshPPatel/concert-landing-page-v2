
/**
 * app.js : JavaScript for the web page's Contact Us page. This script validates the user inputs in the Contact form of the website.
 *
 * Project: Web Project
 * Author: Harsh Patel
 * Date Created: 01 April, 2019
 * Last Modified: 15 April, 2019
 */

//  Variables of inputs and form buttons
var submitButton = document.getElementById('--js-submit-button');
var resetButton  = document.getElementById('--js-reset-button');
var nameInput    = document.getElementById('name_input');
var emailInput   = document.getElementById('email_input');
var phoneInput   = document.getElementById('phoneNumber_input');


/**
 * Hides the errors of the page, and validates the inputs when user clicks the 'Contact Us' button.
 */
function submit() {
  hideErrors();
  validInputs();
}

/**
 * Validates form's all input fields and displays the error message according to it.
 */
function validInputs() {
  if (nameInput.value == "" || nameInput.value == null) {
    showError('name', 'Required Field');
  }
  
  // Validating Email
  validateEmail();
  
  // Validating Phone Number
  validatePhone();
}

/**
 * Validates user input of Email and using Regular Expression, it make sures that it is valid email. If input is invalid, shows 'invalid input' error to email field.
 */
function validateEmail() {
  if (emailInput.value == "" || emailInput.value == null) 
  {
    showError('email', 'Required Field');
  } 
  else 
  {
    var input = emailInput.value;
    var regex = /^[A-Z0-9._-]+@[A-Z0-9_-]+\.[A-Z]{2,4}/i;
    if(!input.match(regex)) {
      showError('email', 'Invalid Input');
    }
  }
}

/**
 * Validates user input of Phone number and using Regular Expression, it make sures that it is valid phone number. If input is invalid, shows 'invalid input' or 'invalid length' error to phone number field.
 */
function validatePhone() {
  if (phoneInput.value == "" || phoneInput.value == null) 
  {
    showError('phoneNumber', 'Required Field');
  } 
  else 
  {
    var input = phoneInput.value;
    if (input.length == 10) 
    {
      var regex = /[0-9]{10}/;
      if(!input.match(regex)) {
        showError('phoneNumber', 'Invalid Input');
      }
    }
    else
    {
      showError('phoneNumber', 'Invlaid Length');
    }
  }
}

/**
 * Hides all errors of the form.
 */
function hideErrors() {
  var errors = document.querySelectorAll('#contact_form .error');
  errors.forEach(function(error) {
    error.style.display = "none";
  });
}


/**
 * Shows the error to given field with given text.
 *
 * Parameter(s):
 * name: name of the input field.
 * text: error text
 */
function showError(name, text) {
  var errorElement = document.getElementById(`--js-${name}-error`);
  errorElement.innerHTML = `* ${text}`;
  errorElement.style.display = 'block';
  document.getElementById(`${name}_input`).value = "";
  document.getElementById(`${name}_input`).focus();
}

/**
 * Adds event listeners to submit and reset buttons of the form.
 */
function addEventListener() {
  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    submit();
  });
  resetButton.addEventListener('click', function() {
    hideErrors();
  });
}

/**
 * Adds event listners to the buttons and hides the errors when website is loaded.
 */
function load() {
  addEventListener();
  hideErrors();
}

document.addEventListener('DOMContentLoaded', load);