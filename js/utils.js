function getInputValue(id) {
  const inputValueByText = document.getElementById(id).value
  const inputvaluConvartNumber = parseFloat(inputValueByText)
  return inputvaluConvartNumber
}

function getInputValueByText(id) {
  const inputValueBalance = document.getElementById(id).innerText
  const numberBalance = parseFloat(inputValueBalance)
  return numberBalance
}