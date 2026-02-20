console.log('I am cashout');

const btnWithdraw = document.getElementById('btnWithdraw');

btnWithdraw.addEventListener('click', function () {
  const agentNum = getInputValue('agentNumber');
  const getPin = getInputValue('pinCashout');
  const currentBalance = document.getElementById('availableBalance').innerText;
  const balanceConvert = parseFloat(currentBalance);
  const addCahoutAmaount = getInputValue('addCahoutAmaount');
  // console.log(currentBalance);
  const checkNumberLength = agentNum.toString().length + 1;

  if (!agentNum || !agentNum || !getPin) {
    alert('Please fill input');
    return;
  }

  if (checkNumberLength !== 11 || getPin !== 1234) {
    alert('Invalid Input Number');
    return;
  }
  const newBalance = balanceConvert - addCahoutAmaount
  document.getElementById('availableBalance').innerText = newBalance;

});
