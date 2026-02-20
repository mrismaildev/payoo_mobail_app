function getInputValue(id) {
  const inputValueByText = document.getElementById(id).value;
  const inputvaluConvartNumber = parseFloat(inputValueByText);
  return inputvaluConvartNumber;
}

function getInputValueByText(id) {
  const inputValueBalance = document.getElementById(id).innerText;
  const numberBalance = parseFloat(inputValueBalance);
  return numberBalance;
}

function toggleShow(id) {
  // Hidden all from
  document.getElementById('transactionDetails').classList.add('hidden');
  document.getElementById('addMoneyForm').classList.add('hidden');
  document.getElementById('cashOutForm').classList.add('hidden');

  // Remove hidden when click
  document.getElementById(id).classList.remove('hidden');
}
