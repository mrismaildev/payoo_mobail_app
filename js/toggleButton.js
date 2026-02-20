const btnMoneyAdd = document.getElementById('btnMoneyAdd');

btnMoneyAdd.addEventListener('click', function () {
  console.log('I am click add money button');
  toggleShow('addMoneyForm');
});
const btnCashout = document.getElementById('btnCashout');

btnCashout.addEventListener('click', function () {
  console.log('I am click cashout')
  toggleShow('cashOutForm');
})

const btnTransaction = document.getElementById('btnTransaction');

btnTransaction.addEventListener('click', function () {
  console.log('I am click transaction btn')
    toggleShow('transactionDetails');
})