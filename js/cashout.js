console.log('I am cashout');

const btnWithdraw = document.getElementById('btnWithdraw');

btnWithdraw.addEventListener('click', function (e) {
  e.preventDefault();
  const agentNum = getInputValue('agentNumber');
  const getPin = getInputValue('pinCashout');
  const addCahoutAmaount = getInputValue('addCahoutAmaount');
  // console.log(currentBalance);

  if (!agentNum || !agentNum || !getPin) {
    alert('Please fill input');
    return;
  }
  const checkNumberLength = agentNum.toString().length;
  console.log(checkNumberLength);

  if (checkNumberLength === 11 && getPin === 1234) {

    const balance = getInputValueByText('availableBalance');

    const newBalance = balance - addCahoutAmaount;
    if (addCahoutAmaount >=newBalance) {
      alert('You have sufficient Balance')
      return
    }
    document.getElementById('availableBalance').innerText = newBalance;
    console.log('success')
  }
});
