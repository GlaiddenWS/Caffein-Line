const form   = document.getElementById('formContact');
const inputs = form.querySelectorAll('input, select, textarea');
const inputName    = document.getElementById('name');
const inputEmail   = document.getElementById('email');
const inputMessage = document.getElementById('message');

//------------------------------------------------------------------------------------------------------

function setValidation(element, msg = NULL) {
  element.classList.add('invalid');
  element.nextElementSibling.innerHTML = msg;
}

//------------------------------------------------------------------------------------------------------

inputs.forEach(element => element.onchange = () => element.classList.remove('invalid'));

//------------------------------------------------------------------------------------------------------

form.onsubmit = e => {
  e.preventDefault();

  if (!inputName.value)                setValidation(inputName,    'Please input your name.');
  if (!inputEmail.value.includes('@')) setValidation(inputEmail,   'Please input a correct email format.');
  if (!inputEmail.value)               setValidation(inputEmail,   'Please input your email.');
  if (!inputMessage.value)             setValidation(inputMessage, 'Please input your message.');
}
