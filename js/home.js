console.log('I am connected');

const btnAddMoney = document.getElementById('btnAddMoney');

btnAddMoney.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('I am click ');
  const pinNumber = getInputValue('pinNumber');
  const addAmount = getInputValue('addAmount');
  const accountNumber = getInputValue('accountNumber');
  const selectBank = document.getElementById('selectBank').value;
  // console.log(balanceNumber, pinNumber, addAmount, accountNumber, selectBank);
  if (!pinNumber || !addAmount || !accountNumber || !selectBank) {
    const sendtoast = document.querySelector('.sendtoast');
    sendtoast.classList.remove('hidden');
    console.log(sendtoast);
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
    const balance = getInputValueByText('availableBalance');
    let newBalalnce = balance + addAmount;
    document.getElementById('availableBalance').innerText = newBalalnce;

    const div = document.createElement('div');

    div.innerHTML = `

    <!-- Electricity Bill -->
          <div
            class="flex items-center justify-between bg-white rounded-2xl px-4 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <i class="ti ti-bolt text-[18px] text-orange-500"></i>
              </div>
              <div>
                <p class="text-[13px] font-semibold text-slate-800">Add money
                 ${addAmount} tk. Total balance ${newBalalnce}  tk.</p>
                <p class="text-[11px] text-slate-400 mt-0.5">Today 01:44 AM</p>
              </div>
            </div>
          </div>
    
    
    
    
    `;
    document.getElementById('transactionDetails').appendChild(div);

    document.querySelector('.succsess').innerHTML = `
     Add money successful <i class=" ti ti-check"></i>
    
    `;
  } else {
    alert('Invalid password');
  }
});
