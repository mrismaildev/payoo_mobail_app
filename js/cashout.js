console.log('I am cashout');

const btnWithdraw = document.getElementById('btnWithdraw');

btnWithdraw.addEventListener('click', function () {
  const amountWithdrow = getInputValue('addCahoutAmaount');
  const agentNum = getInputValue('agentNumber');
  const getPin = getInputValue('pinCashout');
  const checkNumberLength = agentNum.toString().length + 1;

  if (!agentNum || !agentNum || !getPin) {
    alert('Please fill input');
    return;
  }

  if (checkNumberLength !== 11 || getPin !== 1234) {
    alert('Invalid Input Number');

  }
  console.log('success');
});
