console.log('I am connected');

const btnAddMoney = document.getElementById('btnAddMoney');
const availableBalance = document.getElementById('availableBalance').innerText;
const balanceNumber = parseFloat(availableBalance);
const sendtoast = document.querySelector('.sendtoast');

btnAddMoney.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('I am click ');
  const pinNumber = getInputValue('pinNumber');
  const addAmount = getInputValue('addAmount');
  const accountNumber = getInputValue('accountNumber');
  const selectBank = document.getElementById('selectBank').value;
  // console.log(balanceNumber, pinNumber, addAmount, accountNumber, selectBank);
  if (!pinNumber || !addAmount || !accountNumber || !selectBank) {
    document.getElementById('hiddenToast').classList.remove('hidden');
    sendtoast.innerText = 'Please fil the all field';
    return;
  } else {
    document.getElementById('hiddenToast').classList.add('hidden');
  }
  if (isNaN(accountNumber)) {
    alert('incorrect Bank Account Number');
    return;
  }
  if (pinNumber === 1234) {
    const newBalalnce = balanceNumber + addAmount;
    document.getElementById('availableBalance').innerText = newBalalnce;
    sendtoast.classList.add('hidden');
    const successTOAST = document.getElementById('succsess');
    successTOAST.classList.remove('hidden')
    successTOAST.innerText = 'Add Money Success'
    console.log(successTOAST);
  
  }
});
