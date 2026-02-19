function getInputValue(id) {
  const inputValueByText = document.getElementById(id).value
  const inputvaluConvartNumber = parseFloat(inputValueByText)
  return inputvaluConvartNumber
}