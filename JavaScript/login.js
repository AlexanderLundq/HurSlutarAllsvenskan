// JavaScript for login page

// Store the inputs from the form in variables
const form_login      = document.querySelector('#form-login');
const email_input     = document.querySelector('#login-email');
const password_input  = document.querySelector('#login-password');
const msg_login       = document.querySelector('#msg-login')

// Add addEventListener to the submit button in the form
form_login.addEventListener('submit', onSubmit);
function onSubmit(e){
  e.preventDefault();
  // If user doesn't input anything in the fields, display error text
  // The error text is displayed in the empty div created in the html file
  if (email_input.value === '' || password_input.value === ''){
    msg_login.classList.add('error_login');
    msg_login.innerText = 'Vänligen ange e-post och lösenord';
  }
  // If user tries to login, output error
  // TODO: Update this when accounts have been added
  else {
    msg_login.classList.add('error_login');
    msg_login.innerText = 'Felaktig e-postadress eller lösenord';
  }
}
