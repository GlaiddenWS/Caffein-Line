const form = document.getElementById('formPayment');
const inputName    = document.getElementById('name');
const inputEmail   = document.getElementById('email');
const inputCity    = document.getElementById('city');
const inputAddress = document.getElementById('address');
const inputMethod  = document.getElementById('method');

const inputs = form.querySelectorAll('input, select, textarea');

const inputsVisa = document.getElementById('inputVisa');
const inputCard     = document.getElementById('card');
const inputValidity = document.getElementById('validity');
const inputCvv      = document.getElementById('cvv');

//------------------------------------------------------------------------------------------------------

function setValidation(element, msg = NULL) {
  element.classList.add('invalid');
  element.nextElementSibling.innerHTML = msg;
}

function validateCard(str) {
  if (str.length != 19) return false;  

  for(var i = 0; i < str.length; i++) {
    let index = str[i];
    if (index != ' ' && i == 4)  return false;
    if (index != ' ' && i == 9)  return false;
    if (index != ' ' && i == 14) return false;
  }

  return true;
}

//------------------------------------------------------------------------------------------------------

inputs.forEach(element => element.onchange = () => element.classList.remove('invalid'));
if (inputMethod.value == 'visa') inputsVisa.style.display = 'flex';

//------------------------------------------------------------------------------------------------------

inputMethod.onchange = () => {
  inputCard.classList.remove('invalid');
  inputValidity.classList.remove('invalid');
  inputCvv.classList.remove('invalid');

  if (inputMethod.value == 'visa') inputsVisa.style.display = 'flex';
  else                             inputsVisa.style.display = 'none';
};

form.onsubmit = e => {
  e.preventDefault();

  if (!inputName.value)                setValidation(inputName,    'Please input your name.');
  if (!inputEmail.value.includes('@')) setValidation(inputEmail,   'Please input a correct email format.');
  if (!inputEmail.value)               setValidation(inputEmail,   'Please input your email.');
  if (!inputCity.value)                setValidation(inputCity,    'Please input your city.');
  if (!inputAddress.value)             setValidation(inputAddress, 'Please input your address.');
  if (!inputMethod.value)              setValidation(inputMethod,  'Please input your payment method.');

  if (inputMethod.value == 'visa') {
    if (!validateCard(inputCard.value))     setValidation(inputCard,     'Please input the correct format');
    if (!inputCard.value)                   setValidation(inputCard,     'Please input your card number.');
    if (!inputValidity.value.includes('/')) setValidation(inputValidity, 'Please input the correct format');
    if (inputValidity.value.length != 5)    setValidation(inputValidity, 'Please input the correct format');
    if (!inputValidity.value)               setValidation(inputValidity, 'Please input your card validity.');
    if (inputCvv.value.length != 3)         setValidation(inputCvv,      'Please input the correct format');
    if (!inputCvv.value)                    setValidation(inputCvv,      'Please input your card CVV number.');
  }
}