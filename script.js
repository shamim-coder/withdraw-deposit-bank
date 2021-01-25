
// Login Button Event Handler

const loginButton = document.getElementById('login');
loginButton.addEventListener('click', function () {

    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';

    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = "block";
})




// Functions ====
function updateBalance(id, addedAmount) {
    const current = parseFloat(document.getElementById(id).innerText);
    const totalAmount = addedAmount + current;
    document.getElementById(id).innerText = totalAmount;
}

function getInputNumber(id) {
    const inputNumber = parseFloat(document.getElementById(id).value);
    return inputNumber;
}


// Deposit Button Event Handler

const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function () {

    const depositAmount = getInputNumber('deposit-amount');

    updateBalance('current-deposit', depositAmount);
    updateBalance('current-balance', depositAmount);

    document.getElementById('deposit-amount').value = "";
})

// Withdraw Button Event Handler

const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function () {

    const withdrawAmount = getInputNumber('withdraw-amount');

    updateBalance('current-withdraw', withdrawAmount);
    updateBalance('current-balance', -1 * withdrawAmount);


    // document.getElementById('current-balance').innerText = 

    document.getElementById('withdraw-amount').value = "";

})