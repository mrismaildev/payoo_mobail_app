const btnLogIn = document.getElementById('btnLogIn')


btnLogIn.addEventListener('click', function () {
  const inputPhoneNubmer = getInputValue('inputMobailNumber')
  const inputPinNumber = getInputValue('inputPinNumber')

  if (!inputPhoneNubmer || !inputPinNumber) {
    alert('please fil the all field')
    return
  }
  // Phone number Validation

  // phone number validation
  if (isNaN(inputPhoneNubmer) && inputPhoneNubmer.length !== 11) {
    alert('Please enter a valid phone number');
    return;
  }

  if (isNaN(inputPinNumber) || inputPinNumber !== 1234) {
    alert('Login Faild')
    return

  }
    

   window.location.href= '../home.html'
  

})