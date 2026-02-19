console.log('I am connected')


const btnAddMoney = document.getElementById('btnAddMoney')
const availableBalance = document.getElementById('availableBalance').innerText
const balanceNumber = parseFloat(availableBalance)
const sendtoast = document.querySelector('.sendtoast')

btnAddMoney.addEventListener('click', function () {
  console.log("I am click ")
  const pinNumber = getInputValue('pinNumber')
  const addAmount = getInputValue('addAmount')
  const accountNumber = getInputValue('accountNumber')
  const selectBank = document.getElementById('selectBank').value
  console.log(balanceNumber, pinNumber, addAmount, accountNumber, selectBank)
  if (!pinNumber || !addAmount || !accountNumber || !selectBank) {
    document.getElementById('hiddenToast').classList.remove('hidden')
    sendtoast.innerText = 'Please fil the all field'
    return
  }
  else {
    document.getElementById('hiddenToast').classList.add('hidden')
  }
if (accountNumber.length !== 11 || isNaN(accountNumber)) {
    alert('incorrect Bank Account Number');
}
else {

    alert('success')
  }

})