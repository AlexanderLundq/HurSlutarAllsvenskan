// JavaScript for create account page

// Store the inputs from the form in variables
const form_create_account = document.querySelector('#form-create_account');
const firstName_input     = document.querySelector('#user_firstName');
const lastName_input      = document.querySelector('#user_lastName');
const email_input         = document.querySelector('#user_email');
const password_input      = document.querySelector('#user_password');
const msg_create_account  = document.querySelector('#msg-create-account');

// Add addEventListener to the submit button in the form
form_create_account.addEventListener('submit', onSubmit);
function onSubmit(e){
  e.preventDefault();
    // Print a message for now, not ready for users to create account yet
    msg_create_account.classList.add('error_create_account');
    msg_create_account.innerText = 'Hej! Vad kul att du vill skapa ett konto hos Hur Slutar Allvenskan. Sidan är inte riktigt redo för det än, men ha lite tålamod, snart kommer det att fungera! ';
  }
