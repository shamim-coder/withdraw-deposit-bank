
// Login Button Event Handler

const loginButton = document.getElementById('login');
loginButton.addEventListener('click', function () {
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    if (emailInput == 'test@demo.com' && passwordInput == '12345') {
        const loginArea = document.getElementById('login-area');
        loginArea.style.display = 'none';
        
        const transactionArea = document.getElementById('transaction-area');
        transactionArea.style.display = "block";
    }
    else {
        document.getElementById('email').placeholder = "Input Valid Email Address";
        document.getElementById('password').placeholder = "Input Valid Password";

        document.getElementById('email').style.border="2px solid red";
        document.getElementById('password').style.border="2px solid red";
    }

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
    const currentBalance = parseFloat(document.getElementById('current-balance').innerText);
    let withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);

    if( withdrawAmount > currentBalance) {
        document.getElementById('noBalanceError').style.display= "block";
        document.getElementById('noBalanceError').innerText = "You have not enough balance";
    }
    else {
        withdrawAmount = getInputNumber('withdraw-amount');

        updateBalance('current-withdraw', withdrawAmount);
        updateBalance('current-balance', -1 * withdrawAmount);

        document.getElementById('withdraw-amount').value = "";
        document.getElementById('noBalanceError').style.display= "none";
    }
    
    
})